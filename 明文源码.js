<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>流量监测</title>
</head>
<body>
    <h1>已用流量统计</h1>
    <div id="traffic">0 字节</div>

    <script>
        const socket = new WebSocket('wss://your-websocket-url');

        socket.addEventListener('message', function (event) {
            const data = JSON.parse(event.data);
            if (data.totalDownloadedBytes !== undefined) {
                document.getElementById('traffic').innerText = `${data.totalDownloadedBytes} 字节`;
            }
        });
    </script>

    <script>
        import { connect } from 'cloudflare:sockets';

        // 定义密码，用于验证客户端
        let passwd = '123456';
        let totalDownloadedBytes = 0; // 用于统计下载流量

        async function fetch(request, env, _ctx) {
            passwd = env.PASSWD || passwd;
            const upgradeHeader = request.headers.get("Upgrade");

            if (upgradeHeader !== "websocket") return new Response(null, { status: 404 });

            const [client, server] = Object.values(new WebSocketPair());
            server.accept();

            server.addEventListener('message', ({ data }) => {
                try {
                    const { hostname, port, psw } = JSON.parse(data);

                    if (passwd !== psw) throw 'Illegal-User';

                    const socket = connect({ hostname, port });

                    new ReadableStream({
                        start(controller) {
                            server.onmessage = ({ data }) => {
                                controller.enqueue(data);
                                totalDownloadedBytes += data.byteLength; // 更新下载流量
                                server.send(JSON.stringify({ totalDownloadedBytes }));
                            };
                            server.onerror = e => controller.error(e);
                            server.onclose = e => controller.close(e);
                        },
                        cancel(reason) { server.close(); }
                    }).pipeTo(socket.writable);

                    socket.readable.pipeTo(new WritableStream({
                        start(controller) { server.onerror = e => controller.error(e); },
                        write(chunk) {
                            server.send(chunk);
                        }
                    }));
                } catch (error) {
                    server.close();
                }
            }, { once: true });

            return new Response(null, { status: 101, webSocket: client });
        }
    </script>
</body>
</html>
