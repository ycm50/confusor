import { connect } from 'cloudflare:sockets';

let passwd = '123456';
let totalDownloadBytes = 0;

export default {

  async fetch(request, env, _ctx) {
    // 从环境变量中获取密码，如果没有则使用默认密码
    passwd = env.PASSWD || passwd;
    const upgradeHeader = request.headers.get("Upgrade");

    // 如果不是 WebSocket 请求，返回 404
    if (upgradeHeader !== "websocket") return new Response(null, { status: 404 });

    // 创建 WebSocket 对，获取客户端和服务器端的 WebSocket 对象
    const [client, server] = Object.values(new WebSocketPair());
    server.accept();

    // 添加消息事件监听器，只触发一次
    server.addEventListener('message', ({ data }) => {
      try {
        const { hostname, port, psw } = JSON.parse(data);

        // 验证密码
        if (passwd !== psw) throw 'Illegal-User';

        // 创建到目标主机的 TCP 连接
        const socket = connect({ hostname, port });

        // 创建一个 ReadableStream，将 WebSocket 数据传输到 TCP 连接
        new ReadableStream({
          start(controller) {
            server.onmessage = ({ data }) => {
              controller.enqueue(data);
              // 统计下载流量
              totalDownloadBytes += data.length;
              // 将更新后的流量推送到前端
              server.send(JSON.stringify({ totalDownloadBytes }));
            };
            server.onerror = e => controller.error(e);
            server.onclose = e => controller.close(e);
          },
          cancel(reason) { server.close(); }
        }).pipeTo(socket.writable);

        // 创建一个 WritableStream，将 TCP 连接数据传输到 WebSocket
        socket.readable.pipeTo(new WritableStream({
          start(controller) { server.onerror = e => controller.error(e); },
          write(chunk) { server.send(chunk); }
        }));
      } catch (error) {
        // 如果发生错误，关闭 WebSocket 连接
        server.close();
      }
    }, { once: true });

    // 返回 WebSocket 升级响应
    return new Response(null, { status: 101, webSocket: client });
  },

  // 客户端代码
  async handleRequest(request) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Download Traffic</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          #traffic-info {
            margin-top: 20px;
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <h1>Download Traffic</h1>
        <div id="traffic-info">
          Total Downloaded: <span id="traffic">0</span> bytes
        </div>

        <script>
          // 连接到 WebSocket 服务端
          const ws = new WebSocket('wss://your-worker-endpoint'); // 替换为您的 Worker WebSocket URL

          ws.onopen = () => {
            console.log('Connected to server');
          };

          ws.onmessage = (event) => {
            try {
              const message = JSON.parse(event.data);
              if (message.totalDownloadBytes !== undefined) {
                document.getElementById('traffic').innerText = message.totalDownloadBytes;
              }
            } catch (error) {
              console.error('Error parsing WebSocket message:', error);
            }
          };

          ws.onerror = (error) => {
            console.error('WebSocket error:', error);
          };

          ws.onclose = () => {
            console.log('Disconnected from server');
          };
        </script>
      </body>
      </html>
    `;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8'
      }
    });
  }
};
