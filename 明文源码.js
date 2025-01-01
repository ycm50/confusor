import { connect } from 'cloudflare:sockets';

// 定义默认密码
let passwd = '123456';

export default {
  async fetch(request, env, _ctx) {
    // 从环境变量中获取密码，如果没有则使用默认密码
    passwd = env.PASSWD || passwd;
    const upgradeHeader = request.headers.get("Upgrade");

    if (upgradeHeader !== "websocket") return new Response(null, { status: 404 });

    const [client, server] = Object.values(new WebSocketPair());
    server.accept();

    server.addEventListener('message', async ({ data }) => {
      try {
        // 解析客户端发送的 JSON 数据
        const { hostname, port, username, psw } = JSON.parse(data);

        // 验证密码
        if (passwd !== psw) throw 'Illegal-User';

        // 创建到目标主机的 TCP 连接
        const socket = connect({ hostname, port });

        // SOCKS5 握手
        const socksHandshake = new Uint8Array([0x05, 0x01, 0x00]);
        await socket.writable.getWriter().write(socksHandshake);

        const response = new Uint8Array(2);
        await socket.readable.getReader().read(response);

        if (response[1] !== 0x00) throw 'SOCKS5 Authentication failed';

        // 发送连接请求
        const connectRequest = new Uint8Array([0x05, 0x01, 0x00, 0x03, username.length, ...new TextEncoder().encode(username), ...new Uint8Array([port >> 8, port & 0xFF])]);
        await socket.writable.getWriter().write(connectRequest);

        // 处理连接响应
        const connectResponse = new Uint8Array(4);
        await socket.readable.getReader().read(connectResponse);

        if (connectResponse[1] !== 0x00) throw 'SOCKS5 Connection failed';

        // 创建一个 ReadableStream，将 WebSocket 数据传输到 TCP 连接
        new ReadableStream({
          start(controller) {
            server.onmessage = ({ data }) => controller.enqueue(data);
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
        server.close();
      }
    }, { once: true });

    return new Response(null, { status: 101, webSocket: client });
  }
}
