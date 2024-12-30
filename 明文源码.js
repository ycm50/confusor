import { connect } from 'cloudflare:sockets';
let a0_0x1bbd69 = '75544b74-0d2b-43df-866b-e1f7dad73068';
const a0_0x2e17ac = ['ts.hpc.tw'],
  a0_0x2481d9 = [''];
let a0_0x18de4d = 'www.visa.com.sg',
  a0_0x5188b6 = 'www.visa.com',
  a0_0xb61fcc = 'cis.visa.com',
  a0_0x4f575e = 'africa.visa.com',
  a0_0x4c31cf = 'www.visa.com.sg',
  a0_0x5efcdd = 'www.visaeurope.at',
  a0_0x4784b7 = 'www.visa.com.mt',
  a0_0x1f48f2 = 'qa.visamiddleeast.com',
  a0_0x4e6d75 = 'usa.visa.com',
  a0_0x238252 = 'myanmar.visa.com',
  a0_0x3fbbd4 = 'www.visa.com.tw',
  a0_0x47da5f = 'www.visaeurope.ch',
  a0_0x3d8136 = 'www.visa.com.br',
  a0_0x180f7f = 'www.visasoutheasteurope.com',
  a0_0x59d0d3 = '80',
  a0_0x1e5d3b = '8080',
  a0_0x566027 = '8880',
  a0_0xd1fbb0 = '2052',
  a0_0x12ce2c = '2082',
  a0_0x4f709d = '2086',
  a0_0x172510 = '2095',
  a0_0x48ee7c = '443',
  a0_0x14779b = '8443',
  a0_0x317c5b = '2053',
  a0_0x4fe556 = '2083',
  a0_0x50f871 = '2087',
  a0_0x48c020 = '2096',
  a0_0x97d50d = a0_0x2e17ac[Math['floor'](Math['random']() * a0_0x2e17ac['length'])],
  a0_0x17aa74 = a0_0x97d50d['includes'](':') ? a0_0x97d50d['split'](':')[0x1] : '443';
if (!a0_0x40244e(a0_0x1bbd69)) throw new Error('uuid is not valid');
export default {
  async 'fetch'(_0x24ffe8, _0x19c64c, _0x1fcbad) {
    try {
      const {
        proxyip: _0x1ffd7a
      } = _0x19c64c;
      a0_0x1bbd69 = _0x19c64c['uuid'] || a0_0x1bbd69;
      if (_0x1ffd7a) {
        if (_0x1ffd7a['includes'](']:')) {
          let _0x4129af = _0x1ffd7a['lastIndexOf'](':');
          a0_0x17aa74 = _0x1ffd7a['slice'](_0x4129af + 0x1), a0_0x97d50d = _0x1ffd7a['slice'](0x0, _0x4129af);
        } else !_0x1ffd7a['includes'](']:') && !_0x1ffd7a['includes'](']') ? [a0_0x97d50d, a0_0x17aa74 = '443'] = _0x1ffd7a['split'](':') : (a0_0x17aa74 = '443', a0_0x97d50d = _0x1ffd7a);
      } else {
        if (a0_0x97d50d['includes'](']:')) {
          let _0x374ec1 = a0_0x97d50d['lastIndexOf'](':');
          a0_0x17aa74 = a0_0x97d50d['slice'](_0x374ec1 + 0x1), a0_0x97d50d = a0_0x97d50d['slice'](0x0, _0x374ec1);
        } else {
          if (!a0_0x97d50d['includes'](']:') && !a0_0x97d50d['includes'](']')) {
            [a0_0x97d50d, a0_0x17aa74 = '443'] = a0_0x97d50d['split'](':');
          } else a0_0x17aa74 = '443';
        }
      }
      console['log']('ProxyIP:', a0_0x97d50d), console['log']('ProxyPort:', a0_0x17aa74), a0_0x18de4d = _0x19c64c['cdnip'] || a0_0x18de4d, a0_0x5188b6 = _0x19c64c['ip1'] || a0_0x5188b6, a0_0xb61fcc = _0x19c64c['ip2'] || a0_0xb61fcc, a0_0x4f575e = _0x19c64c['ip3'] || a0_0x4f575e, a0_0x4c31cf = _0x19c64c['ip4'] || a0_0x4c31cf, a0_0x5efcdd = _0x19c64c['ip5'] || a0_0x5efcdd, a0_0x4784b7 = _0x19c64c['ip6'] || a0_0x4784b7, a0_0x1f48f2 = _0x19c64c['ip7'] || a0_0x1f48f2, a0_0x4e6d75 = _0x19c64c['ip8'] || a0_0x4e6d75, a0_0x238252 = _0x19c64c['ip9'] || a0_0x238252, a0_0x3fbbd4 = _0x19c64c['ip10'] || a0_0x3fbbd4, a0_0x47da5f = _0x19c64c['ip11'] || a0_0x47da5f, a0_0x3d8136 = _0x19c64c['ip12'] || a0_0x3d8136, a0_0x180f7f = _0x19c64c['ip13'] || a0_0x180f7f, a0_0x59d0d3 = _0x19c64c['pt1'] || a0_0x59d0d3, a0_0x1e5d3b = _0x19c64c['pt2'] || a0_0x1e5d3b, a0_0x566027 = _0x19c64c['pt3'] || a0_0x566027, a0_0xd1fbb0 = _0x19c64c['pt4'] || a0_0xd1fbb0, a0_0x12ce2c = _0x19c64c['pt5'] || a0_0x12ce2c, a0_0x4f709d = _0x19c64c['pt6'] || a0_0x4f709d, a0_0x172510 = _0x19c64c['pt7'] || a0_0x172510, a0_0x48ee7c = _0x19c64c['pt8'] || a0_0x48ee7c, a0_0x14779b = _0x19c64c['pt9'] || a0_0x14779b, a0_0x317c5b = _0x19c64c['pt10'] || a0_0x317c5b, a0_0x4fe556 = _0x19c64c['pt11'] || a0_0x4fe556, a0_0x50f871 = _0x19c64c['pt12'] || a0_0x50f871, a0_0x48c020 = _0x19c64c['pt13'] || a0_0x48c020;
      const _0x254b54 = _0x24ffe8['headers']['get']('Upgrade'),
        _0x178180 = new URL(_0x24ffe8['url']);
      if (!_0x254b54 || _0x254b54 !== 'websocket') {
        const _0x3eff04 = new URL(_0x24ffe8['url']);
        switch (_0x3eff04['pathname']) {
          case '/' + a0_0x1bbd69:
            {
              const _0x49c61f = a0_0x354afa(a0_0x1bbd69, _0x24ffe8['headers']['get']('Host')),
                _0x14add7 = {};
              _0x14add7['Content-Type'] = 'text/html;charset=utf-8';
              const _0x13af40 = {};
              return _0x13af40['status'] = 0xc8, _0x13af40['headers'] = _0x14add7, new Response('' + _0x49c61f, _0x13af40);
            }
          case '/' + a0_0x1bbd69 + '/ty':
            {
              const _0x466632 = a0_0x48f6a2(a0_0x1bbd69, _0x24ffe8['headers']['get']('Host')),
                _0x5afabd = {};
              _0x5afabd['Content-Type'] = 'text/plain;charset=utf-8';
              const _0x3ee78b = {};
              return _0x3ee78b['status'] = 0xc8, _0x3ee78b['headers'] = _0x5afabd, new Response('' + _0x466632, _0x3ee78b);
            }
          case '/' + a0_0x1bbd69 + '/cl':
            {
              const _0x4af515 = a0_0x124902(a0_0x1bbd69, _0x24ffe8['headers']['get']('Host')),
                _0x4db84f = {};
              _0x4db84f['Content-Type'] = 'text/plain;charset=utf-8';
              const _0x58b0e5 = {};
              return _0x58b0e5['status'] = 0xc8, _0x58b0e5['headers'] = _0x4db84f, new Response('' + _0x4af515, _0x58b0e5);
            }
          case '/' + a0_0x1bbd69 + '/sb':
            {
              const _0x5036fe = a0_0x22f51c(a0_0x1bbd69, _0x24ffe8['headers']['get']('Host')),
                _0x2b3be1 = {};
              _0x2b3be1['Content-Type'] = 'application/json;charset=utf-8';
              const _0xdee53d = {};
              return _0xdee53d['status'] = 0xc8, _0xdee53d['headers'] = _0x2b3be1, new Response('' + _0x5036fe, _0xdee53d);
            }
          case '/' + a0_0x1bbd69 + '/pty':
            {
              const _0x5ebca0 = a0_0x25de45(a0_0x1bbd69, _0x24ffe8['headers']['get']('Host')),
                _0x1204ae = {};
              _0x1204ae['Content-Type'] = 'text/plain;charset=utf-8';
              const _0x756ed2 = {};
              return _0x756ed2['status'] = 0xc8, _0x756ed2['headers'] = _0x1204ae, new Response('' + _0x5ebca0, _0x756ed2);
            }
          case '/' + a0_0x1bbd69 + '/pcl':
            {
              const _0xabd974 = a0_0x58e457(a0_0x1bbd69, _0x24ffe8['headers']['get']('Host')),
                _0xfa3000 = {};
              _0xfa3000['Content-Type'] = 'text/plain;charset=utf-8';
              const _0x40819a = {};
              return _0x40819a['status'] = 0xc8, _0x40819a['headers'] = _0xfa3000, new Response('' + _0xabd974, _0x40819a);
            }
          case '/' + a0_0x1bbd69 + '/psb':
            {
              const _0x5b30d4 = a0_0x353c12(a0_0x1bbd69, _0x24ffe8['headers']['get']('Host')),
                _0x3eb0b8 = {};
              _0x3eb0b8['Content-Type'] = 'application/json;charset=utf-8';
              const _0x5c3331 = {};
              return _0x5c3331['status'] = 0xc8, _0x5c3331['headers'] = _0x3eb0b8, new Response('' + _0x5b30d4, _0x5c3331);
            }
          default:
            if (a0_0x2481d9['includes']('')) {
              const _0x54525a = {};
              _0x54525a['Content-Type'] = 'application/json;charset=utf-8';
              const _0x4af768 = {};
              return _0x4af768['status'] = 0xc8, _0x4af768['headers'] = _0x54525a, new Response(JSON['stringify'](_0x24ffe8['cf'], null, 0x4), _0x4af768);
            }
            const _0x411ff4 = a0_0x2481d9[Math['floor'](Math['random']() * a0_0x2481d9['length'])],
              _0x4029bd = new Headers(_0x24ffe8['headers']);
            _0x4029bd['set']('cf-connecting-ip', '1.2.3.4'), _0x4029bd['set']('x-forwarded-for', '1.2.3.4'), _0x4029bd['set']('x-real-ip', '1.2.3.4'), _0x4029bd['set']('referer', 'https://www.google.com/search?q=edtunnel');
            const _0x4e4c20 = 'https://' + _0x411ff4 + _0x3eff04['pathname'] + _0x3eff04['search'],
              _0x572064 = {};
            _0x572064['method'] = _0x24ffe8['method'], _0x572064['headers'] = _0x4029bd, _0x572064['body'] = _0x24ffe8['body'], _0x572064['redirect'] = 'manual';
            let _0x37cfd1 = new Request(_0x4e4c20, _0x572064);
            const _0x1eb479 = await fetch(_0x37cfd1, {
              'redirect': 'manual'
            });
            if ([0x12d, 0x12e]['includes'](_0x1eb479['status'])) {
              const _0x7e56f1 = {};
              return _0x7e56f1['status'] = 0x193, _0x7e56f1['statusText'] = 'Forbidden', new Response('Redirects to ' + _0x411ff4 + ' are not allowed.', _0x7e56f1);
            }
            return _0x1eb479;
        }
      } else {
        if (_0x178180['pathname']['includes']('/pyip=')) {
          const _0x63f6f0 = _0x178180['pathname']['split']('=')[0x1];
          if (a0_0x3c3280(_0x63f6f0)) {
            a0_0x97d50d = _0x63f6f0;
            if (a0_0x97d50d['includes'](']:')) {
              let _0x59a52f = a0_0x97d50d['lastIndexOf'](':');
              a0_0x17aa74 = a0_0x97d50d['slice'](_0x59a52f + 0x1), a0_0x97d50d = a0_0x97d50d['slice'](0x0, _0x59a52f);
            } else {
              if (!a0_0x97d50d['includes'](']:') && !a0_0x97d50d['includes'](']')) {
                [a0_0x97d50d, a0_0x17aa74 = '443'] = a0_0x97d50d['split'](':');
              } else a0_0x17aa74 = '443';
            }
          }
        }
        return await a0_0x137a17(_0x24ffe8);
      }
    } catch (_0x12a083) {
      let _0x954f71 = _0x12a083;
      return new Response(_0x954f71['toString']());
    }
  }
};
function a0_0x3c3280(_0x5171d3) {
  var _0x175fcb = /^[\s\S]*$/;
  return _0x175fcb['test'](_0x5171d3);
}
async function a0_0x137a17(_0x2b5d64) {
  const _0x4e6f29 = new WebSocketPair(),
    [_0x1f1331, _0x3f9346] = Object['values'](_0x4e6f29);
  _0x3f9346['accept']();
  let _0x15677e = '',
    _0x3139eb = '';
  const _0x35b116 = (_0x274a60, _0x5b3b31) => {
      console['log']('[' + _0x15677e + ':' + _0x3139eb + '] ' + _0x274a60, _0x5b3b31 || '');
    },
    _0x3c5d7d = _0x2b5d64['headers']['get']('sec-websocket-protocol') || '',
    _0x3cdf8b = a0_0x2fad07(_0x3f9346, _0x3c5d7d, _0x35b116),
    _0x391c8c = {};
  _0x391c8c['value'] = null;
  let _0x44771c = _0x391c8c,
    _0x4350a5 = null,
    _0x295bc8 = false;
  _0x3cdf8b['pipeTo'](new WritableStream({
    async 'write'(_0x54a738, _0x20919a) {
      if (_0x295bc8 && _0x4350a5) return _0x4350a5(_0x54a738);
      if (_0x44771c['value']) {
        const _0x172bb6 = _0x44771c['value']['writable']['getWriter']();
        await _0x172bb6['write'](_0x54a738), _0x172bb6['releaseLock']();
        return;
      }
      const {
        hasError: _0x27b795,
        message: _0x1bf0b5,
        portRemote = 0x1bb,
        addressRemote = '',
        rawDataIndex: _0x48bf06,
        vlessVersion = new Uint8Array([0x0, 0x0]),
        isUDP: _0x226f5e
      } = await a0_0x5d01f5(_0x54a738, a0_0x1bbd69);
      _0x15677e = addressRemote, _0x3139eb = portRemote + '--' + Math['random']() + ' ' + (_0x226f5e ? 'udp ' : 'tcp ') + ' ';
      if (_0x27b795) {
        throw new Error(_0x1bf0b5);
        return;
      }
      if (_0x226f5e) {
        if (portRemote === 0x35) _0x295bc8 = true;else {
          throw new Error('UDP proxy only enable for DNS which is port 53');
          return;
        }
      }
      const _0x599ce8 = new Uint8Array([vlessVersion[0x0], 0x0]),
        _0x45d357 = _0x54a738['slice'](_0x48bf06);
      if (_0x295bc8) {
        const {
          write: _0x3e1256
        } = await a0_0x1286fd(_0x3f9346, _0x599ce8, _0x35b116);
        _0x4350a5 = _0x3e1256, _0x4350a5(_0x45d357);
        return;
      }
      a0_0x22adb2(_0x44771c, addressRemote, portRemote, _0x45d357, _0x3f9346, _0x599ce8, _0x35b116);
    },
    'close'() {
      _0x35b116('readableWebSocketStream is close');
    },
    'abort'(_0x199cc4) {
      _0x35b116('readableWebSocketStream is abort', JSON['stringify'](_0x199cc4));
    }
  }))['catch'](_0x55b4e6 => {
    _0x35b116('readableWebSocketStream pipeTo error', _0x55b4e6);
  });
  const _0x4a1598 = {};
  return _0x4a1598['status'] = 0x65, _0x4a1598['webSocket'] = _0x1f1331, new Response(null, _0x4a1598);
}
async function a0_0x484d0f(_0x2f25a9) {
  try {
    const _0x1d0f9b = await getApiResponse();
    if (!_0x1d0f9b) {
      return false;
    }
    const _0x1174e4 = _0x1d0f9b['users']['some'](_0x2ce9bd => _0x2ce9bd['uuid'] === _0x2f25a9);
    return _0x1174e4;
  } catch (_0x25f6e1) {
    return console['error']('Error:', _0x25f6e1), false;
  }
}
async function a0_0x22adb2(_0x20e15d, _0x3d67db, _0x2b84f0, _0x2a2bea, _0x276eac, _0x342e50, _0x53d022) {
  async function _0x592e9b(_0x579a42, _0x1d0747) {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/['test'](_0x579a42)) _0x579a42 = '' + atob('d3d3Lg==') + _0x579a42 + atob('LnNzbGlwLmlv');
    const _0x4f7915 = {};
    _0x4f7915['hostname'] = _0x579a42, _0x4f7915['port'] = _0x1d0747;
    const _0x569c94 = connect(_0x4f7915);
    _0x20e15d['value'] = _0x569c94, _0x53d022('connected to ' + _0x579a42 + ':' + _0x1d0747);
    const _0x2cbf99 = _0x569c94['writable']['getWriter']();
    return await _0x2cbf99['write'](_0x2a2bea), _0x2cbf99['releaseLock'](), _0x569c94;
  }
  async function _0x38eff3() {
    const _0x51cbb2 = await _0x592e9b(a0_0x97d50d || _0x3d67db, a0_0x17aa74 || _0x2b84f0);
    _0x51cbb2['closed']['catch'](_0x18b42a => {
      console['log']('retry tcpSocket closed error', _0x18b42a);
    })['finally'](() => {
      a0_0x1217d6(_0x276eac);
    }), a0_0x3c0f91(_0x51cbb2, _0x276eac, _0x342e50, null, _0x53d022);
  }
  const _0x365b6f = await _0x592e9b(_0x3d67db, _0x2b84f0);
  a0_0x3c0f91(_0x365b6f, _0x276eac, _0x342e50, _0x38eff3, _0x53d022);
}
function a0_0x2fad07(_0x1d9f8a, _0x1f9f8a, _0x103319) {
  let _0x197691 = false;
  const _0x2afb0f = new ReadableStream({
    'start'(_0xa7cbf4) {
      _0x1d9f8a['addEventListener']('message', _0x4c0502 => {
        if (_0x197691) {
          return;
        }
        const _0x3d8be3 = _0x4c0502['data'];
        _0xa7cbf4['enqueue'](_0x3d8be3);
      }), _0x1d9f8a['addEventListener']('close', () => {
        a0_0x1217d6(_0x1d9f8a);
        if (_0x197691) {
          return;
        }
        _0xa7cbf4['close']();
      }), _0x1d9f8a['addEventListener']('error', _0x572edd => {
        _0x103319('webSocketServer has error'), _0xa7cbf4['error'](_0x572edd);
      });
      const {
        earlyData: _0x59a72c,
        error: _0x2601c0
      } = a0_0x72c389(_0x1f9f8a);
      if (_0x2601c0) {
        _0xa7cbf4['error'](_0x2601c0);
      } else {
        if (_0x59a72c) {
          _0xa7cbf4['enqueue'](_0x59a72c);
        }
      }
    },
    'pull'(_0x125026) {},
    'cancel'(_0x516cab) {
      if (_0x197691) {
        return;
      }
      _0x103319('ReadableStream was canceled, due to ' + _0x516cab), _0x197691 = true, a0_0x1217d6(_0x1d9f8a);
    }
  });
  return _0x2afb0f;
}
async function a0_0x5d01f5(_0x45d269, _0x1c03e4) {
  if (_0x45d269['byteLength'] < 0x18) {
    const _0x2e666b = {};
    return _0x2e666b['hasError'] = true, _0x2e666b['message'] = 'invalid data', _0x2e666b;
  }
  const _0x2fb141 = new Uint8Array(_0x45d269['slice'](0x0, 0x1));
  let _0xe1360 = false,
    _0x2ee16f = false;
  const _0x4205d8 = new Uint8Array(_0x45d269['slice'](0x1, 0x11)),
    _0x2ea641 = a0_0x49f817(_0x4205d8),
    _0x2c869d = _0x1c03e4['includes'](',') ? _0x1c03e4['split'](',') : [_0x1c03e4],
    _0x5c6d94 = await a0_0x484d0f(_0x2ea641);
  _0xe1360 = _0x2c869d['some'](_0x5351be => _0x5c6d94 || _0x2ea641 === _0x5351be['trim']()), console['log']('checkUuidInApi: ' + (await a0_0x484d0f(_0x2ea641)) + ', userID: ' + _0x2ea641);
  if (!_0xe1360) {
    const _0x435a3b = {};
    return _0x435a3b['hasError'] = true, _0x435a3b['message'] = 'invalid user', _0x435a3b;
  }
  const _0x31daf3 = new Uint8Array(_0x45d269['slice'](0x11, 0x12))[0x0],
    _0x324681 = new Uint8Array(_0x45d269['slice'](0x12 + _0x31daf3, 0x12 + _0x31daf3 + 0x1))[0x0];
  if (_0x324681 === 0x1) {} else {
    if (_0x324681 === 0x2) _0x2ee16f = true;else {
      const _0x1538d9 = {};
      return _0x1538d9['hasError'] = true, _0x1538d9['message'] = 'command ' + _0x324681 + ' is not support, command 01-tcp,02-udp,03-mux', _0x1538d9;
    }
  }
  const _0x3d197e = 0x12 + _0x31daf3 + 0x1,
    _0x55dd77 = _0x45d269['slice'](_0x3d197e, _0x3d197e + 0x2),
    _0x525b31 = new DataView(_0x55dd77)['getUint16'](0x0);
  let _0x3a2256 = _0x3d197e + 0x2;
  const _0x3a49a4 = new Uint8Array(_0x45d269['slice'](_0x3a2256, _0x3a2256 + 0x1)),
    _0x3f7cc0 = _0x3a49a4[0x0];
  let _0x17f28b = 0x0,
    _0x103932 = _0x3a2256 + 0x1,
    _0x5abc16 = '';
  switch (_0x3f7cc0) {
    case 0x1:
      _0x17f28b = 0x4, _0x5abc16 = new Uint8Array(_0x45d269['slice'](_0x103932, _0x103932 + _0x17f28b))['join']('.');
      break;
    case 0x2:
      _0x17f28b = new Uint8Array(_0x45d269['slice'](_0x103932, _0x103932 + 0x1))[0x0], _0x103932 += 0x1, _0x5abc16 = new TextDecoder()['decode'](_0x45d269['slice'](_0x103932, _0x103932 + _0x17f28b));
      break;
    case 0x3:
      _0x17f28b = 0x10;
      const _0x360ffe = new DataView(_0x45d269['slice'](_0x103932, _0x103932 + _0x17f28b)),
        _0x51174d = [];
      for (let _0x6b312c = 0x0; _0x6b312c < 0x8; _0x6b312c++) {
        _0x51174d['push'](_0x360ffe['getUint16'](_0x6b312c * 0x2)['toString'](0x10));
      }
      _0x5abc16 = _0x51174d['join'](':');
      break;
    default:
      const _0x5997d9 = {};
      _0x5997d9['hasError'] = true, _0x5997d9['message'] = 'invild  addressType is ' + _0x3f7cc0;
      return _0x5997d9;
  }
  if (!_0x5abc16) {
    const _0x2a2cac = {};
    return _0x2a2cac['hasError'] = true, _0x2a2cac['message'] = 'addressValue is empty, addressType is ' + _0x3f7cc0, _0x2a2cac;
  }
  return {
    'hasError': false,
    'addressRemote': _0x5abc16,
    'addressType': _0x3f7cc0,
    'portRemote': _0x525b31,
    'rawDataIndex': _0x103932 + _0x17f28b,
    'vlessVersion': _0x2fb141,
    'isUDP': _0x2ee16f
  };
}
async function a0_0x3c0f91(_0x539f5e, _0x357ef1, _0x4db5b7, _0x2db2b8, _0x32c25c) {
  let _0x38847a = 0x0,
    _0x77aca1 = [],
    _0x33478f = _0x4db5b7,
    _0x394fa0 = false;
  await _0x539f5e['readable']['pipeTo'](new WritableStream({
    'start'() {},
    async 'write'(_0x37d988, _0x139b9a) {
      _0x394fa0 = true;
      _0x357ef1['readyState'] !== a0_0x308809 && _0x139b9a['error']('webSocket.readyState is not open, maybe close');
      if (_0x33478f) _0x357ef1['send'](await new Blob([_0x33478f, _0x37d988])['arrayBuffer']()), _0x33478f = null;else {
        _0x357ef1['send'](_0x37d988);
      }
    },
    'close'() {
      _0x32c25c('remoteConnection!.readable is close with hasIncomingData is ' + _0x394fa0);
    },
    'abort'(_0x4184d1) {
      console['error']('remoteConnection!.readable abort', _0x4184d1);
    }
  }))['catch'](_0x48e7aa => {
    console['error']('remoteSocketToWS has exception ', _0x48e7aa['stack'] || _0x48e7aa), a0_0x1217d6(_0x357ef1);
  });
  if (_0x394fa0 === false && _0x2db2b8) {
    _0x32c25c('retry'), _0x2db2b8();
  }
}
function a0_0x72c389(_0x1631d8) {
  if (!_0x1631d8) {
    const _0x134749 = {};
    return _0x134749['error'] = null, _0x134749;
  }
  try {
    _0x1631d8 = _0x1631d8['replace'](/-/g, '+')['replace'](/_/g, '/');
    const _0x2ab50e = atob(_0x1631d8),
      _0xbc5b59 = Uint8Array['from'](_0x2ab50e, _0x19cd65 => _0x19cd65['charCodeAt'](0x0)),
      _0xb6ed3 = {};
    return _0xb6ed3['earlyData'] = _0xbc5b59['buffer'], _0xb6ed3['error'] = null, _0xb6ed3;
  } catch (_0x3e2a86) {
    const _0x16f061 = {};
    return _0x16f061['error'] = _0x3e2a86, _0x16f061;
  }
}
function a0_0x40244e(_0x119b4b) {
  const _0x1139f8 = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return _0x1139f8['test'](_0x119b4b);
}
const a0_0x308809 = 0x1,
  a0_0x1a5150 = 0x2;
function a0_0x1217d6(_0x162c18) {
  try {
    if (_0x162c18['readyState'] === a0_0x308809 || _0x162c18['readyState'] === a0_0x1a5150) {
      _0x162c18['close']();
    }
  } catch (_0x1f4047) {
    console['error']('safeCloseWebSocket error', _0x1f4047);
  }
}
const a0_0x553e91 = [];
for (let a0_0x19041a = 0x0; a0_0x19041a < 0x100; ++a0_0x19041a) {
  a0_0x553e91['push']((a0_0x19041a + 0x100)['toString'](0x10)['slice'](0x1));
}
function a0_0x527638(_0x2150c0, _0x531eea = 0x0) {
  return (a0_0x553e91[_0x2150c0[_0x531eea + 0x0]] + a0_0x553e91[_0x2150c0[_0x531eea + 0x1]] + a0_0x553e91[_0x2150c0[_0x531eea + 0x2]] + a0_0x553e91[_0x2150c0[_0x531eea + 0x3]] + '-' + a0_0x553e91[_0x2150c0[_0x531eea + 0x4]] + a0_0x553e91[_0x2150c0[_0x531eea + 0x5]] + '-' + a0_0x553e91[_0x2150c0[_0x531eea + 0x6]] + a0_0x553e91[_0x2150c0[_0x531eea + 0x7]] + '-' + a0_0x553e91[_0x2150c0[_0x531eea + 0x8]] + a0_0x553e91[_0x2150c0[_0x531eea + 0x9]] + '-' + a0_0x553e91[_0x2150c0[_0x531eea + 0xa]] + a0_0x553e91[_0x2150c0[_0x531eea + 0xb]] + a0_0x553e91[_0x2150c0[_0x531eea + 0xc]] + a0_0x553e91[_0x2150c0[_0x531eea + 0xd]] + a0_0x553e91[_0x2150c0[_0x531eea + 0xe]] + a0_0x553e91[_0x2150c0[_0x531eea + 0xf]])['toLowerCase']();
}
function a0_0x49f817(_0xc19e11, _0x3ebb9c = 0x0) {
  const _0xcfd86f = a0_0x527638(_0xc19e11, _0x3ebb9c);
  if (!a0_0x40244e(_0xcfd86f)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return _0xcfd86f;
}
async function a0_0x1286fd(_0x8b7e51, _0x1452ab, _0x565119) {
  let _0x490bd6 = false;
  const _0x799819 = new TransformStream({
    'start'(_0x2fc57e) {},
    'transform'(_0x53bdd0, _0x2d7ba4) {
      for (let _0x2b745e = 0x0; _0x2b745e < _0x53bdd0['byteLength'];) {
        const _0x277cf3 = _0x53bdd0['slice'](_0x2b745e, _0x2b745e + 0x2),
          _0x2754dc = new DataView(_0x277cf3)['getUint16'](0x0),
          _0x2505ff = new Uint8Array(_0x53bdd0['slice'](_0x2b745e + 0x2, _0x2b745e + 0x2 + _0x2754dc));
        _0x2b745e = _0x2b745e + 0x2 + _0x2754dc, _0x2d7ba4['enqueue'](_0x2505ff);
      }
    },
    'flush'(_0x195c8d) {}
  });
  _0x799819['readable']['pipeTo'](new WritableStream({
    async 'write'(_0x203537) {
      const _0x3e28f9 = await fetch(dohURL, {
          'method': 'POST',
          'headers': {
            'content-type': 'application/dns-message'
          },
          'body': _0x203537
        }),
        _0x178dd7 = await _0x3e28f9['arrayBuffer'](),
        _0x33dbc3 = _0x178dd7['byteLength'],
        _0x1269c7 = new Uint8Array([_0x33dbc3 >> 0x8 & 0xff, _0x33dbc3 & 0xff]);
      _0x8b7e51['readyState'] === a0_0x308809 && (_0x565119('doh success and dns message length is ' + _0x33dbc3), _0x490bd6 ? _0x8b7e51['send'](await new Blob([_0x1269c7, _0x178dd7])['arrayBuffer']()) : (_0x8b7e51['send'](await new Blob([_0x1452ab, _0x1269c7, _0x178dd7])['arrayBuffer']()), _0x490bd6 = true));
    }
  }))['catch'](_0xc2e41b => {
    _0x565119('dns udp has error' + _0xc2e41b);
  });
  const _0x51fad3 = _0x799819['writable']['getWriter']();
  return {
    'write'(_0x52e040) {
      _0x51fad3['write'](_0x52e040);
    }
  };
}
function a0_0x354afa(_0x597358, _0x599e21) {
  const _0x1daea0 = 'vless://' + _0x597358 + '@' + a0_0x18de4d + ':8880?encryption=none&security=none&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#' + _0x599e21,
    _0x272ede = 'vless://' + _0x597358 + '@' + a0_0x18de4d + ':8443?encryption=none&security=tls&type=ws&host=' + _0x599e21 + '&sni=' + _0x599e21 + '&fp=random&path=%2F%3Fed%3D2560#' + _0x599e21,
    _0x308f1e = '甬哥博客地址：https://ygkkk.blogspot.com\n甬哥YouTube频道：https://www.youtube.com/@ygkkk\n甬哥TG电报群组：https://t.me/ygkkktg\n甬哥TG电报频道：https://t.me/ygkkktgpd\n\nProxyIP全局运行中：' + a0_0x97d50d,
    _0x5161b6 = 'https://' + _0x599e21 + '/' + _0x597358 + '/ty',
    _0xe94dbc = 'https://' + _0x599e21 + '/' + _0x597358 + '/cl',
    _0x1705f8 = 'https://' + _0x599e21 + '/' + _0x597358 + '/sb',
    _0x33361a = 'https://' + _0x599e21 + '/' + _0x597358 + '/pty',
    _0x280b9e = 'https://' + _0x599e21 + '/' + _0x597358 + '/pcl',
    _0x5bef60 = 'https://' + _0x599e21 + '/' + _0x597358 + '/psb',
    _0x1bd06f = btoa('vless://' + _0x597358 + '@' + a0_0x5188b6 + ':' + a0_0x59d0d3 + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V1_' + a0_0x5188b6 + '_' + a0_0x59d0d3 + '\nvless://' + _0x597358 + '@' + a0_0xb61fcc + ':' + a0_0x1e5d3b + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V2_' + a0_0xb61fcc + '_' + a0_0x1e5d3b + '\nvless://' + _0x597358 + '@' + a0_0x4f575e + ':' + a0_0x566027 + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V3_' + a0_0x4f575e + '_' + a0_0x566027 + '\nvless://' + _0x597358 + '@' + a0_0x4c31cf + ':' + a0_0xd1fbb0 + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V4_' + a0_0x4c31cf + '_' + a0_0xd1fbb0 + '\nvless://' + _0x597358 + '@' + a0_0x5efcdd + ':' + a0_0x12ce2c + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V5_' + a0_0x5efcdd + '_' + a0_0x12ce2c + '\nvless://' + _0x597358 + '@' + a0_0x4784b7 + ':' + a0_0x4f709d + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V6_' + a0_0x4784b7 + '_' + a0_0x4f709d + '\nvless://' + _0x597358 + '@' + a0_0x1f48f2 + ':' + a0_0x172510 + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V7_' + a0_0x1f48f2 + '_' + a0_0x172510 + '\nvless://' + _0x597358 + '@' + a0_0x4e6d75 + ':' + a0_0x48ee7c + '?encryption=none&security=tls&sni=' + _0x599e21 + '&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '\nvless://' + _0x597358 + '@' + a0_0x238252 + ':' + a0_0x14779b + '?encryption=none&security=tls&sni=' + _0x599e21 + '&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '\nvless://' + _0x597358 + '@' + a0_0x3fbbd4 + ':' + a0_0x317c5b + '?encryption=none&security=tls&sni=' + _0x599e21 + '&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '\nvless://' + _0x597358 + '@' + a0_0x47da5f + ':' + a0_0x4fe556 + '?encryption=none&security=tls&sni=' + _0x599e21 + '&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '\nvless://' + _0x597358 + '@' + a0_0x3d8136 + ':' + a0_0x50f871 + '?encryption=none&security=tls&sni=' + _0x599e21 + '&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '\nvless://' + _0x597358 + '@' + a0_0x180f7f + ':' + a0_0x48c020 + '?encryption=none&security=tls&sni=' + _0x599e21 + '&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020),
    _0x5ee982 = btoa('vless://' + _0x597358 + '@' + a0_0x4e6d75 + ':' + a0_0x48ee7c + '?encryption=none&security=tls&sni=' + _0x599e21 + '&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '\nvless://' + _0x597358 + '@' + a0_0x238252 + ':' + a0_0x14779b + '?encryption=none&security=tls&sni=' + _0x599e21 + '&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '\nvless://' + _0x597358 + '@' + a0_0x3fbbd4 + ':' + a0_0x317c5b + '?encryption=none&security=tls&sni=' + _0x599e21 + '&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '\nvless://' + _0x597358 + '@' + a0_0x47da5f + ':' + a0_0x4fe556 + '?encryption=none&security=tls&sni=' + _0x599e21 + '&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '\nvless://' + _0x597358 + '@' + a0_0x3d8136 + ':' + a0_0x50f871 + '?encryption=none&security=tls&sni=' + _0x599e21 + '&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '\nvless://' + _0x597358 + '@' + a0_0x180f7f + ':' + a0_0x48c020 + '?encryption=none&security=tls&sni=' + _0x599e21 + '&fp=randomized&type=ws&host=' + _0x599e21 + '&path=%2F%3Fed%3D2560#CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020),
    _0x16d8ee = _0x308f1e['replace'](/\n/g, '<br>'),
    _0x1d5b0e = '\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>\n<style>\n.limited-width {\n    max-width: 200px;\n    overflow: auto;\n    word-wrap: break-word;\n}\n</style>\n</head>\n<script>\nfunction copyToClipboard(text) {\n  const input = document.createElement(\'textarea\');\n  input.style.position = \'fixed\';\n  input.style.opacity = 0;\n  input.value = text;\n  document.body.appendChild(input);\n  input.select();\n  document.execCommand(\'Copy\');\n  document.body.removeChild(input);\n  alert(\'已复制到剪贴板\');\n}\n</script>\n';
  return _0x599e21['includes']('workers.dev') ? '\n<br>\n<br>\n' + _0x1d5b0e + '\n<body>\n<div class="container">\n    <div class="row">\n        <div class="col-md-12">\n            <h1>Cloudflare-workers/pages-vless代理脚本 V24.12.13</h1>\n\t    <hr>\n            <p>' + _0x16d8ee + '</p>\n            <hr>\n\t    <hr>\n\t    <hr>\n            <br>\n            <br>\n            <h3>1：CF-workers-vless+ws节点</h3>\n\t\t\t<table class="table">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>节点特色：</th>\n\t\t\t\t\t\t<th>单节点链接如下：</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class="limited-width">关闭了TLS加密，无视域名阻断</td>\n\t\t\t\t\t\t<td class="limited-width">' + _0x1daea0 + '</td>\n\t\t\t\t\t\t<td><button class="btn btn-primary" onclick="copyToClipboard(\'' + _0x1daea0 + '\')">点击复制链接</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>客户端参数如下：</h5>\n            <ul>\n                <li>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>\n                <li>端口(port)：7个http端口可任意选择(80、8080、8880、2052、2082、2086、2095)，或反代IP对应端口</li>\n                <li>用户ID(uuid)：' + _0x597358 + '</li>\n                <li>传输协议(network)：ws 或者 websocket</li>\n                <li>伪装域名(host)：' + _0x599e21 + '</li>\n                <li>路径(path)：/?ed=2560</li>\n\t\t<li>传输安全(TLS)：关闭</li>\n            </ul>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n            <h3>2：CF-workers-vless+ws+tls节点</h3>\n\t\t\t<table class="table">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>节点特色：</th>\n\t\t\t\t\t\t<th>单节点链接如下：</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class="limited-width">启用了TLS加密，<br>如果客户端支持分片(Fragment)功能，建议开启，防止域名阻断</td>\n\t\t\t\t\t\t<td class="limited-width">' + _0x272ede + '</td>\t\n\t\t\t\t\t\t<td><button class="btn btn-primary" onclick="copyToClipboard(\'' + _0x272ede + '\')">点击复制链接</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>客户端参数如下：</h5>\n            <ul>\n                <li>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>\n                <li>端口(port)：6个https端口可任意选择(443、8443、2053、2083、2087、2096)，或反代IP对应端口</li>\n                <li>用户ID(uuid)：' + _0x597358 + '</li>\n                <li>传输协议(network)：ws 或者 websocket</li>\n                <li>伪装域名(host)：' + _0x599e21 + '</li>\n                <li>路径(path)：/?ed=2560</li>\n                <li>传输安全(TLS)：开启</li>\n                <li>跳过证书验证(allowlnsecure)：false</li>\n\t\t\t</ul>\n\t\t\t<hr>\n\t\t\t<hr>\n\t\t\t<hr>\n\t\t\t<br>\t\n\t\t\t<br>\n\t\t\t<h3>3：聚合通用、Clash-meta、Sing-box订阅链接如下：</h3>\n\t\t\t<hr>\n\t\t\t<p>注意：<br>1、默认每个订阅链接包含TLS+非TLS共13个端口节点<br>2、当前workers域名作为订阅链接，需通过代理进行订阅更新<br>3、如使用的客户端不支持分片功能，则TLS节点不可用</p>\n\t\t\t<hr>\n\n\n\t\t\t<table class="table">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>聚合通用分享链接 (可直接导入客户端)：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><button class="btn btn-primary" onclick="copyToClipboard(\'' + _0x1bd06f + '\')">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\n\n   \n\t\t\t<table class="table">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>聚合通用订阅链接：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="limited-width">' + _0x5161b6 + '</td>\t\n\t\t\t\t\t\t\t<td><button class="btn btn-primary" onclick="copyToClipboard(\'' + _0x5161b6 + '\')">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\n\n\t\t\t\t<table class="table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Clash-meta订阅链接：</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class="limited-width">' + _0xe94dbc + '</td>\t\n\t\t\t\t\t\t\t\t<td><button class="btn btn-primary" onclick="copyToClipboard(\'' + _0xe94dbc + '\')">点击复制链接</button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class="table">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sing-box订阅链接：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="limited-width">' + _0x1705f8 + '</td>\t\n\t\t\t\t\t\t\t<td><button class="btn btn-primary" onclick="copyToClipboard(\'' + _0x1705f8 + '\')">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        </div>\n    </div>\n</div>\n</body>\n' : '\n<br>\n<br>\n' + _0x1d5b0e + '\n<body>\n<div class="container">\n    <div class="row">\n        <div class="col-md-12">\n            <h1>Cloudflare-workers/pages-vless代理脚本 V24.12.13</h1>\n\t\t\t<hr>\n            <p>' + _0x16d8ee + '</p>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n            <h3>1：CF-pages/workers/自定义域-vless+ws+tls节点</h3>\n\t\t\t<table class="table">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>节点特色：</th>\n\t\t\t\t\t\t<th>单节点链接如下：</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class="limited-width">启用了TLS加密，<br>如果客户端支持分片(Fragment)功能，可开启，防止域名阻断</td>\n\t\t\t\t\t\t<td class="limited-width">' + _0x272ede + '</td>\n\t\t\t\t\t\t<td><button class="btn btn-primary" onclick="copyToClipboard(\'' + _0x272ede + '\')">点击复制链接</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>客户端参数如下：</h5>\n            <ul>\n                <li>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>\n                <li>端口(port)：6个https端口可任意选择(443、8443、2053、2083、2087、2096)，或反代IP对应端口</li>\n                <li>用户ID(uuid)：' + _0x597358 + '</li>\n                <li>传输协议(network)：ws 或者 websocket</li>\n                <li>伪装域名(host)：' + _0x599e21 + '</li>\n                <li>路径(path)：/?ed=2560</li>\n                <li>传输安全(TLS)：开启</li>\n                <li>跳过证书验证(allowlnsecure)：false</li>\n\t\t\t</ul>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n\t\t\t<h3>2：聚合通用、Clash-meta、Sing-box订阅链接如下：</h3>\n\t\t\t<hr>\n\t\t\t<p>注意：以下订阅链接仅6个TLS端口节点</p>\n\t\t\t<hr>\n\n\n\t\t\t<table class="table">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>聚合通用分享链接 (可直接导入客户端)：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><button class="btn btn-primary" onclick="copyToClipboard(\'' + _0x5ee982 + '\')">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\n\n\n\t\t\t<table class="table">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>聚合通用订阅链接：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="limited-width">' + _0x33361a + '</td>\t\n\t\t\t\t\t\t\t<td><button class="btn btn-primary" onclick="copyToClipboard(\'' + _0x33361a + '\')">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\n\n\t\t\t\t<table class="table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Clash-meta订阅链接：</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class="limited-width">' + _0x280b9e + '</td>\t\n\t\t\t\t\t\t\t\t<td><button class="btn btn-primary" onclick="copyToClipboard(\'' + _0x280b9e + '\')">点击复制链接</button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class="table">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sing-box订阅链接：</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="limited-width">' + _0x5bef60 + '</td>\t\n\t\t\t\t\t\t\t<td><button class="btn btn-primary" onclick="copyToClipboard(\'' + _0x5bef60 + '\')">点击复制链接</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        </div>\n    </div>\n</div>\n</body>\n';
}
function a0_0x48f6a2(_0x14c4a4, _0xac0fe7) {
  const _0x43762a = btoa('vless://' + _0x14c4a4 + '@' + a0_0x5188b6 + ':' + a0_0x59d0d3 + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V1_' + a0_0x5188b6 + '_' + a0_0x59d0d3 + '\nvless://' + _0x14c4a4 + '@' + a0_0xb61fcc + ':' + a0_0x1e5d3b + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V2_' + a0_0xb61fcc + '_' + a0_0x1e5d3b + '\nvless://' + _0x14c4a4 + '@' + a0_0x4f575e + ':' + a0_0x566027 + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V3_' + a0_0x4f575e + '_' + a0_0x566027 + '\nvless://' + _0x14c4a4 + '@' + a0_0x4c31cf + ':' + a0_0xd1fbb0 + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V4_' + a0_0x4c31cf + '_' + a0_0xd1fbb0 + '\nvless://' + _0x14c4a4 + '@' + a0_0x5efcdd + ':' + a0_0x12ce2c + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V5_' + a0_0x5efcdd + '_' + a0_0x12ce2c + '\nvless://' + _0x14c4a4 + '@' + a0_0x4784b7 + ':' + a0_0x4f709d + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V6_' + a0_0x4784b7 + '_' + a0_0x4f709d + '\nvless://' + _0x14c4a4 + '@' + a0_0x1f48f2 + ':' + a0_0x172510 + '?encryption=none&security=none&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V7_' + a0_0x1f48f2 + '_' + a0_0x172510 + '\nvless://' + _0x14c4a4 + '@' + a0_0x4e6d75 + ':' + a0_0x48ee7c + '?encryption=none&security=tls&sni=' + _0xac0fe7 + '&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '\nvless://' + _0x14c4a4 + '@' + a0_0x238252 + ':' + a0_0x14779b + '?encryption=none&security=tls&sni=' + _0xac0fe7 + '&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '\nvless://' + _0x14c4a4 + '@' + a0_0x3fbbd4 + ':' + a0_0x317c5b + '?encryption=none&security=tls&sni=' + _0xac0fe7 + '&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '\nvless://' + _0x14c4a4 + '@' + a0_0x47da5f + ':' + a0_0x4fe556 + '?encryption=none&security=tls&sni=' + _0xac0fe7 + '&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '\nvless://' + _0x14c4a4 + '@' + a0_0x3d8136 + ':' + a0_0x50f871 + '?encryption=none&security=tls&sni=' + _0xac0fe7 + '&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '\nvless://' + _0x14c4a4 + '@' + a0_0x180f7f + ':' + a0_0x48c020 + '?encryption=none&security=tls&sni=' + _0xac0fe7 + '&fp=randomized&type=ws&host=' + _0xac0fe7 + '&path=%2F%3Fed%3D2560#CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020);
  return '' + _0x43762a;
}
function a0_0x124902(_0x2518d3, _0x5abf60) {
  return '\nport: 7890\nallow-lan: true\nmode: rule\nlog-level: info\nunified-delay: true\nglobal-client-fingerprint: chrome\ndns:\n  enable: true\n  listen: :53\n  ipv6: true\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  default-nameserver: \n    - 223.5.5.5\n    - 114.114.114.114\n    - 8.8.8.8\n  nameserver:\n    - https://dns.alidns.com/dns-query\n    - https://doh.pub/dns-query\n  fallback:\n    - https://1.0.0.1/dns-query\n    - tls://dns.google\n  fallback-filter:\n    geoip: true\n    geoip-code: CN\n    ipcidr:\n      - 240.0.0.0/4\n\nproxies:\n- name: CF_V1_' + a0_0x5188b6 + '_' + a0_0x59d0d3 + '\n  type: vless\n  server: ' + a0_0x5188b6 + '\n  port: ' + a0_0x59d0d3 + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\n- name: CF_V2_' + a0_0xb61fcc + '_' + a0_0x1e5d3b + '\n  type: vless\n  server: ' + a0_0xb61fcc + '\n  port: ' + a0_0x1e5d3b + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\n- name: CF_V3_' + a0_0x4f575e + '_' + a0_0x566027 + '\n  type: vless\n  server: ' + a0_0x4f575e + '\n  port: ' + a0_0x566027 + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\n- name: CF_V4_' + a0_0x4c31cf + '_' + a0_0xd1fbb0 + '\n  type: vless\n  server: ' + a0_0x4c31cf + '\n  port: ' + a0_0xd1fbb0 + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\n- name: CF_V5_' + a0_0x5efcdd + '_' + a0_0x12ce2c + '\n  type: vless\n  server: ' + a0_0x5efcdd + '\n  port: ' + a0_0x12ce2c + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\n- name: CF_V6_' + a0_0x4784b7 + '_' + a0_0x4f709d + '\n  type: vless\n  server: ' + a0_0x4784b7 + '\n  port: ' + a0_0x4f709d + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\n- name: CF_V7_' + a0_0x1f48f2 + '_' + a0_0x172510 + '\n  type: vless\n  server: ' + a0_0x1f48f2 + '\n  port: ' + a0_0x172510 + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: false\n  network: ws\n  servername: ' + _0x5abf60 + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\n- name: CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '\n  type: vless\n  server: ' + a0_0x4e6d75 + '\n  port: ' + a0_0x48ee7c + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: true\n  network: ws\n  servername: ' + _0x5abf60 + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\n- name: CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '\n  type: vless\n  server: ' + a0_0x238252 + '\n  port: ' + a0_0x14779b + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: true\n  network: ws\n  servername: ' + _0x5abf60 + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\n- name: CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '\n  type: vless\n  server: ' + a0_0x3fbbd4 + '\n  port: ' + a0_0x317c5b + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: true\n  network: ws\n  servername: ' + _0x5abf60 + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\n- name: CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '\n  type: vless\n  server: ' + a0_0x47da5f + '\n  port: ' + a0_0x4fe556 + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: true\n  network: ws\n  servername: ' + _0x5abf60 + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\n- name: CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '\n  type: vless\n  server: ' + a0_0x3d8136 + '\n  port: ' + a0_0x50f871 + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: true\n  network: ws\n  servername: ' + _0x5abf60 + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\n- name: CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '\n  type: vless\n  server: ' + a0_0x180f7f + '\n  port: ' + a0_0x48c020 + '\n  uuid: ' + _0x2518d3 + '\n  udp: false\n  tls: true\n  network: ws\n  servername: ' + _0x5abf60 + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x5abf60 + '\n\nproxy-groups:\n- name: 负载均衡\n  type: load-balance\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  proxies:\n    - CF_V1_' + a0_0x5188b6 + '_' + a0_0x59d0d3 + '\n    - CF_V2_' + a0_0xb61fcc + '_' + a0_0x1e5d3b + '\n    - CF_V3_' + a0_0x4f575e + '_' + a0_0x566027 + '\n    - CF_V4_' + a0_0x4c31cf + '_' + a0_0xd1fbb0 + '\n    - CF_V5_' + a0_0x5efcdd + '_' + a0_0x12ce2c + '\n    - CF_V6_' + a0_0x4784b7 + '_' + a0_0x4f709d + '\n    - CF_V7_' + a0_0x1f48f2 + '_' + a0_0x172510 + '\n    - CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '\n    - CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '\n    - CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '\n    - CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '\n    - CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '\n    - CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '\n\n- name: 自动选择\n  type: url-test\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  tolerance: 50\n  proxies:\n    - CF_V1_' + a0_0x5188b6 + '_' + a0_0x59d0d3 + '\n    - CF_V2_' + a0_0xb61fcc + '_' + a0_0x1e5d3b + '\n    - CF_V3_' + a0_0x4f575e + '_' + a0_0x566027 + '\n    - CF_V4_' + a0_0x4c31cf + '_' + a0_0xd1fbb0 + '\n    - CF_V5_' + a0_0x5efcdd + '_' + a0_0x12ce2c + '\n    - CF_V6_' + a0_0x4784b7 + '_' + a0_0x4f709d + '\n    - CF_V7_' + a0_0x1f48f2 + '_' + a0_0x172510 + '\n    - CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '\n    - CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '\n    - CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '\n    - CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '\n    - CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '\n    - CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '\n\n- name: 🌍选择代理\n  type: select\n  proxies:\n    - 负载均衡\n    - 自动选择\n    - DIRECT\n    - CF_V1_' + a0_0x5188b6 + '_' + a0_0x59d0d3 + '\n    - CF_V2_' + a0_0xb61fcc + '_' + a0_0x1e5d3b + '\n    - CF_V3_' + a0_0x4f575e + '_' + a0_0x566027 + '\n    - CF_V4_' + a0_0x4c31cf + '_' + a0_0xd1fbb0 + '\n    - CF_V5_' + a0_0x5efcdd + '_' + a0_0x12ce2c + '\n    - CF_V6_' + a0_0x4784b7 + '_' + a0_0x4f709d + '\n    - CF_V7_' + a0_0x1f48f2 + '_' + a0_0x172510 + '\n    - CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '\n    - CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '\n    - CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '\n    - CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '\n    - CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '\n    - CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '\n\nrules:\n  - GEOIP,LAN,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,🌍选择代理';
}
function a0_0x22f51c(_0x3771ce, _0x7ad693) {
  return '{\n\t  "log": {\n\t\t"disabled": false,\n\t\t"level": "info",\n\t\t"timestamp": true\n\t  },\n\t  "experimental": {\n\t\t"clash_api": {\n\t\t  "external_controller": "127.0.0.1:9090",\n\t\t  "external_ui": "ui",\n\t\t  "external_ui_download_url": "",\n\t\t  "external_ui_download_detour": "",\n\t\t  "secret": "",\n\t\t  "default_mode": "Rule"\n\t\t},\n\t\t"cache_file": {\n\t\t  "enabled": true,\n\t\t  "path": "cache.db",\n\t\t  "store_fakeip": true\n\t\t}\n\t  },\n\t  "dns": {\n\t\t"servers": [\n\t\t  {\n\t\t\t"tag": "proxydns",\n\t\t\t"address": "tls://8.8.8.8/dns-query",\n\t\t\t"detour": "select"\n\t\t  },\n\t\t  {\n\t\t\t"tag": "localdns",\n\t\t\t"address": "h3://223.5.5.5/dns-query",\n\t\t\t"detour": "direct"\n\t\t  },\n\t\t  {\n\t\t\t"tag": "dns_fakeip",\n\t\t\t"address": "fakeip"\n\t\t  }\n\t\t],\n\t\t"rules": [\n\t\t  {\n\t\t\t"outbound": "any",\n\t\t\t"server": "localdns",\n\t\t\t"disable_cache": true\n\t\t  },\n\t\t  {\n\t\t\t"clash_mode": "Global",\n\t\t\t"server": "proxydns"\n\t\t  },\n\t\t  {\n\t\t\t"clash_mode": "Direct",\n\t\t\t"server": "localdns"\n\t\t  },\n\t\t  {\n\t\t\t"rule_set": "geosite-cn",\n\t\t\t"server": "localdns"\n\t\t  },\n\t\t  {\n\t\t\t"rule_set": "geosite-geolocation-!cn",\n\t\t\t"server": "proxydns"\n\t\t  },\n\t\t  {\n\t\t\t"rule_set": "geosite-geolocation-!cn",\n\t\t\t"query_type": [\n\t\t\t  "A",\n\t\t\t  "AAAA"\n\t\t\t],\n\t\t\t"server": "dns_fakeip"\n\t\t  }\n\t\t],\n\t\t"fakeip": {\n\t\t  "enabled": true,\n\t\t  "inet4_range": "198.18.0.0/15",\n\t\t  "inet6_range": "fc00::/18"\n\t\t},\n\t\t"independent_cache": true,\n\t\t"final": "proxydns"\n\t  },\n\t  "inbounds": [\n\t\t{\n\t\t  "type": "tun",\n                  "tag": "tun-in",\n\t\t  "address": [\n                    "172.19.0.1/30",\n\t\t    "fd00::1/126"\n      ],\n\t\t  "auto_route": true,\n\t\t  "strict_route": true,\n\t\t  "sniff": true,\n\t\t  "sniff_override_destination": true,\n\t\t  "domain_strategy": "prefer_ipv4"\n\t\t}\n\t  ],\n\t  "outbounds": [\n\t\t{\n\t\t  "tag": "select",\n\t\t  "type": "selector",\n\t\t  "default": "auto",\n\t\t  "outbounds": [\n\t\t\t"auto",\n\t\t\t"CF_V1_' + a0_0x5188b6 + '_' + a0_0x59d0d3 + '",\n\t\t\t"CF_V2_' + a0_0xb61fcc + '_' + a0_0x1e5d3b + '",\n\t\t\t"CF_V3_' + a0_0x4f575e + '_' + a0_0x566027 + '",\n\t\t\t"CF_V4_' + a0_0x4c31cf + '_' + a0_0xd1fbb0 + '",\n\t\t\t"CF_V5_' + a0_0x5efcdd + '_' + a0_0x12ce2c + '",\n\t\t\t"CF_V6_' + a0_0x4784b7 + '_' + a0_0x4f709d + '",\n\t\t\t"CF_V7_' + a0_0x1f48f2 + '_' + a0_0x172510 + '",\n\t\t\t"CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '",\n\t\t\t"CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '",\n\t\t\t"CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '",\n\t\t\t"CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '",\n\t\t\t"CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '",\n\t\t\t"CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '"\n\t\t  ]\n\t\t},\n\t\t{\n\t\t  "server": "' + a0_0x5188b6 + '",\n\t\t  "server_port": ' + a0_0x59d0d3 + ',\n\t\t  "tag": "CF_V1_' + a0_0x5188b6 + '_' + a0_0x59d0d3 + '",\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{\n\t\t  "server": "' + a0_0xb61fcc + '",\n\t\t  "server_port": ' + a0_0x1e5d3b + ',\n\t\t  "tag": "CF_V2_' + a0_0xb61fcc + '_' + a0_0x1e5d3b + '",\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{\n\t\t  "server": "' + a0_0x4f575e + '",\n\t\t  "server_port": ' + a0_0x566027 + ',\n\t\t  "tag": "CF_V3_' + a0_0x4f575e + '_' + a0_0x566027 + '",\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{\n\t\t  "server": "' + a0_0x4c31cf + '",\n\t\t  "server_port": ' + a0_0xd1fbb0 + ',\n\t\t  "tag": "CF_V4_' + a0_0x4c31cf + '_' + a0_0xd1fbb0 + '",\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{\n\t\t  "server": "' + a0_0x5efcdd + '",\n\t\t  "server_port": ' + a0_0x12ce2c + ',\n\t\t  "tag": "CF_V5_' + a0_0x5efcdd + '_' + a0_0x12ce2c + '",\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{\n\t\t  "server": "' + a0_0x4784b7 + '",\n\t\t  "server_port": ' + a0_0x4f709d + ',\n\t\t  "tag": "CF_V6_' + a0_0x4784b7 + '_' + a0_0x4f709d + '",\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{\n\t\t  "server": "' + a0_0x1f48f2 + '",\n\t\t  "server_port": ' + a0_0x172510 + ',\n\t\t  "tag": "CF_V7_' + a0_0x1f48f2 + '_' + a0_0x172510 + '",\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{     \n\t\t  "server": "' + a0_0x4e6d75 + '",\n\t\t  "server_port": ' + a0_0x48ee7c + ',\n\t\t  "tag": "CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '",\n\t\t  "tls": {\n\t\t\t"enabled": true,\n\t\t\t"server_name": "' + _0x7ad693 + '",\n\t\t\t"insecure": false,\n\t\t\t"utls": {\n\t\t\t  "enabled": true,\n\t\t\t  "fingerprint": "chrome"\n\t\t\t}\n\t\t  },\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{\n\t\t  "server": "' + a0_0x238252 + '",\n\t\t  "server_port": ' + a0_0x14779b + ',\n\t\t  "tag": "CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '",\n\t\t  "tls": {\n\t\t\t"enabled": true,\n\t\t\t"server_name": "' + _0x7ad693 + '",\n\t\t\t"insecure": false,\n\t\t\t"utls": {\n\t\t\t  "enabled": true,\n\t\t\t  "fingerprint": "chrome"\n\t\t\t}\n\t\t  },\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{\n\t\t  "server": "' + a0_0x3fbbd4 + '",\n\t\t  "server_port": ' + a0_0x317c5b + ',\n\t\t  "tag": "CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '",\n\t\t  "tls": {\n\t\t\t"enabled": true,\n\t\t\t"server_name": "' + _0x7ad693 + '",\n\t\t\t"insecure": false,\n\t\t\t"utls": {\n\t\t\t  "enabled": true,\n\t\t\t  "fingerprint": "chrome"\n\t\t\t}\n\t\t  },\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{\n\t\t  "server": "' + a0_0x47da5f + '",\n\t\t  "server_port": ' + a0_0x4fe556 + ',\n\t\t  "tag": "CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '",\n\t\t  "tls": {\n\t\t\t"enabled": true,\n\t\t\t"server_name": "' + _0x7ad693 + '",\n\t\t\t"insecure": false,\n\t\t\t"utls": {\n\t\t\t  "enabled": true,\n\t\t\t  "fingerprint": "chrome"\n\t\t\t}\n\t\t  },\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{\n\t\t  "server": "' + a0_0x3d8136 + '",\n\t\t  "server_port": ' + a0_0x50f871 + ',\n\t\t  "tag": "CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '",\n\t\t  "tls": {\n\t\t\t"enabled": true,\n\t\t\t"server_name": "' + _0x7ad693 + '",\n\t\t\t"insecure": false,\n\t\t\t"utls": {\n\t\t\t  "enabled": true,\n\t\t\t  "fingerprint": "chrome"\n\t\t\t}\n\t\t  },\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{\n\t\t  "server": "' + a0_0x180f7f + '",\n\t\t  "server_port": ' + a0_0x48c020 + ',\n\t\t  "tag": "CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '",\n\t\t  "tls": {\n\t\t\t"enabled": true,\n\t\t\t"server_name": "' + _0x7ad693 + '",\n\t\t\t"insecure": false,\n\t\t\t"utls": {\n\t\t\t  "enabled": true,\n\t\t\t  "fingerprint": "chrome"\n\t\t\t}\n\t\t  },\n\t\t  "packet_encoding": "packetaddr",\n\t\t  "transport": {\n\t\t\t"headers": {\n\t\t\t  "Host": [\n\t\t\t\t"' + _0x7ad693 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t"path": "/?ed=2560",\n\t\t\t"type": "ws"\n\t\t  },\n\t\t  "type": "vless",\n\t\t  "uuid": "' + _0x3771ce + '"\n\t\t},\n\t\t{\n\t\t  "tag": "direct",\n\t\t  "type": "direct"\n\t\t},\n\t\t{\n\t\t  "tag": "auto",\n\t\t  "type": "urltest",\n\t\t  "outbounds": [\n\t\t\t"CF_V1_' + a0_0x5188b6 + '_' + a0_0x59d0d3 + '",\n\t\t\t"CF_V2_' + a0_0xb61fcc + '_' + a0_0x1e5d3b + '",\n\t\t\t"CF_V3_' + a0_0x4f575e + '_' + a0_0x566027 + '",\n\t\t\t"CF_V4_' + a0_0x4c31cf + '_' + a0_0xd1fbb0 + '",\n\t\t\t"CF_V5_' + a0_0x5efcdd + '_' + a0_0x12ce2c + '",\n\t\t\t"CF_V6_' + a0_0x4784b7 + '_' + a0_0x4f709d + '",\n\t\t\t"CF_V7_' + a0_0x1f48f2 + '_' + a0_0x172510 + '",\n\t\t\t"CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '",\n\t\t\t"CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '",\n\t\t\t"CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '",\n\t\t\t"CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '",\n\t\t\t"CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '",\n\t\t\t"CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '"\n\t\t  ],\n\t\t  "url": "https://www.gstatic.com/generate_204",\n\t\t  "interval": "1m",\n\t\t  "tolerance": 50,\n\t\t  "interrupt_exist_connections": false\n\t\t}\n\t  ],\n\t  "route": {\n\t\t"rule_set": [\n\t\t  {\n\t\t\t"tag": "geosite-geolocation-!cn",\n\t\t\t"type": "remote",\n\t\t\t"format": "binary",\n\t\t\t"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs",\n\t\t\t"download_detour": "select",\n\t\t\t"update_interval": "1d"\n\t\t  },\n\t\t  {\n\t\t\t"tag": "geosite-cn",\n\t\t\t"type": "remote",\n\t\t\t"format": "binary",\n\t\t\t"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs",\n\t\t\t"download_detour": "select",\n\t\t\t"update_interval": "1d"\n\t\t  },\n\t\t  {\n\t\t\t"tag": "geoip-cn",\n\t\t\t"type": "remote",\n\t\t\t"format": "binary",\n\t\t\t"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs",\n\t\t\t"download_detour": "select",\n\t\t\t"update_interval": "1d"\n\t\t  }\n\t\t],\n\t\t"auto_detect_interface": true,\n\t\t"final": "select",\n\t\t"rules": [\n                         {\n                        "inbound": "tun-in",\n                        "action": "sniff"\n                         },\n                          {\n                        "protocol": "dns",\n                           "action": "hijack-dns"\n                         },\n                        {\n                        "port": 443,\n                        "network": "udp",\n                        "action": "reject"\n                         },\n\t\t  {\n\t\t\t"clash_mode": "Direct",\n\t\t\t"outbound": "direct"\n\t\t  },\n\t\t  {\n\t\t\t"clash_mode": "Global",\n\t\t\t"outbound": "select"\n\t\t  },\n\t\t  {\n\t\t\t"rule_set": "geoip-cn",\n\t\t\t"outbound": "direct"\n\t\t  },\n\t\t  {\n\t\t\t"rule_set": "geosite-cn",\n\t\t\t"outbound": "direct"\n\t\t  },\n\t\t  {\n\t\t\t"ip_is_private": true,\n\t\t\t"outbound": "direct"\n\t\t  },\n\t\t  {\n\t\t\t"rule_set": "geosite-geolocation-!cn",\n\t\t\t"outbound": "select"\n\t\t  }\n\t\t]\n\t  },\n\t  "ntp": {\n\t\t"enabled": true,\n\t\t"server": "time.apple.com",\n\t\t"server_port": 123,\n\t\t"interval": "30m",\n\t\t"detour": "direct"\n\t  }\n\t}';
}
function a0_0x25de45(_0x641da5, _0x225e4c) {
  const _0x305964 = btoa('vless://' + _0x641da5 + '@' + a0_0x4e6d75 + ':' + a0_0x48ee7c + '?encryption=none&security=tls&sni=' + _0x225e4c + '&fp=randomized&type=ws&host=' + _0x225e4c + '&path=%2F%3Fed%3D2560#CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '\nvless://' + _0x641da5 + '@' + a0_0x238252 + ':' + a0_0x14779b + '?encryption=none&security=tls&sni=' + _0x225e4c + '&fp=randomized&type=ws&host=' + _0x225e4c + '&path=%2F%3Fed%3D2560#CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '\nvless://' + _0x641da5 + '@' + a0_0x3fbbd4 + ':' + a0_0x317c5b + '?encryption=none&security=tls&sni=' + _0x225e4c + '&fp=randomized&type=ws&host=' + _0x225e4c + '&path=%2F%3Fed%3D2560#CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '\nvless://' + _0x641da5 + '@' + a0_0x47da5f + ':' + a0_0x4fe556 + '?encryption=none&security=tls&sni=' + _0x225e4c + '&fp=randomized&type=ws&host=' + _0x225e4c + '&path=%2F%3Fed%3D2560#CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '\nvless://' + _0x641da5 + '@' + a0_0x3d8136 + ':' + a0_0x50f871 + '?encryption=none&security=tls&sni=' + _0x225e4c + '&fp=randomized&type=ws&host=' + _0x225e4c + '&path=%2F%3Fed%3D2560#CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '\nvless://' + _0x641da5 + '@' + a0_0x180f7f + ':' + a0_0x48c020 + '?encryption=none&security=tls&sni=' + _0x225e4c + '&fp=randomized&type=ws&host=' + _0x225e4c + '&path=%2F%3Fed%3D2560#CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020);
  return '' + _0x305964;
}
function a0_0x58e457(_0x23194b, _0x36c9ef) {
  return '\nport: 7890\nallow-lan: true\nmode: rule\nlog-level: info\nunified-delay: true\nglobal-client-fingerprint: chrome\ndns:\n  enable: true\n  listen: :53\n  ipv6: true\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  default-nameserver: \n    - 223.5.5.5\n    - 114.114.114.114\n    - 8.8.8.8\n  nameserver:\n    - https://dns.alidns.com/dns-query\n    - https://doh.pub/dns-query\n  fallback:\n    - https://1.0.0.1/dns-query\n    - tls://dns.google\n  fallback-filter:\n    geoip: true\n    geoip-code: CN\n    ipcidr:\n      - 240.0.0.0/4\n\nproxies:\n- name: CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '\n  type: vless\n  server: ' + a0_0x4e6d75 + '\n  port: ' + a0_0x48ee7c + '\n  uuid: ' + _0x23194b + '\n  udp: false\n  tls: true\n  network: ws\n  servername: ' + _0x36c9ef + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x36c9ef + '\n\n- name: CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '\n  type: vless\n  server: ' + a0_0x238252 + '\n  port: ' + a0_0x14779b + '\n  uuid: ' + _0x23194b + '\n  udp: false\n  tls: true\n  network: ws\n  servername: ' + _0x36c9ef + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x36c9ef + '\n\n- name: CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '\n  type: vless\n  server: ' + a0_0x3fbbd4 + '\n  port: ' + a0_0x317c5b + '\n  uuid: ' + _0x23194b + '\n  udp: false\n  tls: true\n  network: ws\n  servername: ' + _0x36c9ef + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x36c9ef + '\n\n- name: CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '\n  type: vless\n  server: ' + a0_0x47da5f + '\n  port: ' + a0_0x4fe556 + '\n  uuid: ' + _0x23194b + '\n  udp: false\n  tls: true\n  network: ws\n  servername: ' + _0x36c9ef + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x36c9ef + '\n\n- name: CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '\n  type: vless\n  server: ' + a0_0x3d8136 + '\n  port: ' + a0_0x50f871 + '\n  uuid: ' + _0x23194b + '\n  udp: false\n  tls: true\n  network: ws\n  servername: ' + _0x36c9ef + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x36c9ef + '\n\n- name: CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '\n  type: vless\n  server: ' + a0_0x180f7f + '\n  port: ' + a0_0x48c020 + '\n  uuid: ' + _0x23194b + '\n  udp: false\n  tls: true\n  network: ws\n  servername: ' + _0x36c9ef + '\n  ws-opts:\n    path: "/?ed=2560"\n    headers:\n      Host: ' + _0x36c9ef + '\n\nproxy-groups:\n- name: 负载均衡\n  type: load-balance\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  proxies:\n    - CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '\n    - CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '\n    - CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '\n    - CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '\n    - CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '\n    - CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '\n\n- name: 自动选择\n  type: url-test\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  tolerance: 50\n  proxies:\n    - CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '\n    - CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '\n    - CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '\n    - CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '\n    - CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '\n    - CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '\n\n- name: 🌍选择代理\n  type: select\n  proxies:\n    - 负载均衡\n    - 自动选择\n    - DIRECT\n    - CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '\n    - CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '\n    - CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '\n    - CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '\n    - CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '\n    - CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '\n\nrules:\n  - GEOIP,LAN,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,🌍选择代理';
}
function a0_0x353c12(_0x595c92, _0x2e29c2) {
  return '{\n\t\t  "log": {\n\t\t\t"disabled": false,\n\t\t\t"level": "info",\n\t\t\t"timestamp": true\n\t\t  },\n\t\t  "experimental": {\n\t\t\t"clash_api": {\n\t\t\t  "external_controller": "127.0.0.1:9090",\n\t\t\t  "external_ui": "ui",\n\t\t\t  "external_ui_download_url": "",\n\t\t\t  "external_ui_download_detour": "",\n\t\t\t  "secret": "",\n\t\t\t  "default_mode": "Rule"\n\t\t\t},\n\t\t\t"cache_file": {\n\t\t\t  "enabled": true,\n\t\t\t  "path": "cache.db",\n\t\t\t  "store_fakeip": true\n\t\t\t}\n\t\t  },\n\t\t  "dns": {\n\t\t\t"servers": [\n\t\t\t  {\n\t\t\t\t"tag": "proxydns",\n\t\t\t\t"address": "tls://8.8.8.8/dns-query",\n\t\t\t\t"detour": "select"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"tag": "localdns",\n\t\t\t\t"address": "h3://223.5.5.5/dns-query",\n\t\t\t\t"detour": "direct"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"tag": "dns_fakeip",\n\t\t\t\t"address": "fakeip"\n\t\t\t  }\n\t\t\t],\n\t\t\t"rules": [\n\t\t\t  {\n\t\t\t\t"outbound": "any",\n\t\t\t\t"server": "localdns",\n\t\t\t\t"disable_cache": true\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"clash_mode": "Global",\n\t\t\t\t"server": "proxydns"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"clash_mode": "Direct",\n\t\t\t\t"server": "localdns"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"rule_set": "geosite-cn",\n\t\t\t\t"server": "localdns"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"rule_set": "geosite-geolocation-!cn",\n\t\t\t\t"server": "proxydns"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"rule_set": "geosite-geolocation-!cn",\n\t\t\t\t"query_type": [\n\t\t\t\t  "A",\n\t\t\t\t  "AAAA"\n\t\t\t\t],\n\t\t\t\t"server": "dns_fakeip"\n\t\t\t  }\n\t\t\t],\n\t\t\t"fakeip": {\n\t\t\t  "enabled": true,\n\t\t\t  "inet4_range": "198.18.0.0/15",\n\t\t\t  "inet6_range": "fc00::/18"\n\t\t\t},\n\t\t\t"independent_cache": true,\n\t\t\t"final": "proxydns"\n\t\t  },\n\t\t  "inbounds": [\n\t\t\t{\n\t\t\t  "type": "tun",\n                        "tag": "tun-in",\n\t\t  "address": [\n                    "172.19.0.1/30",\n\t\t    "fd00::1/126"\n      ],\n\t\t\t  "auto_route": true,\n\t\t\t  "strict_route": true,\n\t\t\t  "sniff": true,\n\t\t\t  "sniff_override_destination": true,\n\t\t\t  "domain_strategy": "prefer_ipv4"\n\t\t\t}\n\t\t  ],\n\t\t  "outbounds": [\n\t\t\t{\n\t\t\t  "tag": "select",\n\t\t\t  "type": "selector",\n\t\t\t  "default": "auto",\n\t\t\t  "outbounds": [\n\t\t\t\t"auto",\n\t\t\t\t"CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '",\n\t\t\t\t"CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '",\n\t\t\t\t"CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '",\n\t\t\t\t"CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '",\n\t\t\t\t"CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '",\n\t\t\t\t"CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '"\n\t\t\t  ]\n\t\t\t},\n\t\t\t{\n\t\t\t  "server": "' + a0_0x4e6d75 + '",\n\t\t\t  "server_port": ' + a0_0x48ee7c + ',\n\t\t\t  "tag": "CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '",\n\t\t\t  "tls": {\n\t\t\t\t"enabled": true,\n\t\t\t\t"server_name": "' + _0x2e29c2 + '",\n\t\t\t\t"insecure": false,\n\t\t\t\t"utls": {\n\t\t\t\t  "enabled": true,\n\t\t\t\t  "fingerprint": "chrome"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  "packet_encoding": "packetaddr",\n\t\t\t  "transport": {\n\t\t\t\t"headers": {\n\t\t\t\t  "Host": [\n\t\t\t\t\t"' + _0x2e29c2 + '"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t"path": "/?ed=2560",\n\t\t\t\t"type": "ws"\n\t\t\t  },\n\t\t\t  "type": "vless",\n\t\t\t  "uuid": "' + _0x595c92 + '"\n\t\t\t},\n\t\t\t{\n\t\t\t  "server": "' + a0_0x238252 + '",\n\t\t\t  "server_port": ' + a0_0x14779b + ',\n\t\t\t  "tag": "CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '",\n\t\t\t  "tls": {\n\t\t\t\t"enabled": true,\n\t\t\t\t"server_name": "' + _0x2e29c2 + '",\n\t\t\t\t"insecure": false,\n\t\t\t\t"utls": {\n\t\t\t\t  "enabled": true,\n\t\t\t\t  "fingerprint": "chrome"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  "packet_encoding": "packetaddr",\n\t\t\t  "transport": {\n\t\t\t\t"headers": {\n\t\t\t\t  "Host": [\n\t\t\t\t\t"' + _0x2e29c2 + '"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t"path": "/?ed=2560",\n\t\t\t\t"type": "ws"\n\t\t\t  },\n\t\t\t  "type": "vless",\n\t\t\t  "uuid": "' + _0x595c92 + '"\n\t\t\t},\n\t\t\t{\n\t\t\t  "server": "' + a0_0x3fbbd4 + '",\n\t\t\t  "server_port": ' + a0_0x317c5b + ',\n\t\t\t  "tag": "CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '",\n\t\t\t  "tls": {\n\t\t\t\t"enabled": true,\n\t\t\t\t"server_name": "' + _0x2e29c2 + '",\n\t\t\t\t"insecure": false,\n\t\t\t\t"utls": {\n\t\t\t\t  "enabled": true,\n\t\t\t\t  "fingerprint": "chrome"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  "packet_encoding": "packetaddr",\n\t\t\t  "transport": {\n\t\t\t\t"headers": {\n\t\t\t\t  "Host": [\n\t\t\t\t\t"' + _0x2e29c2 + '"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t"path": "/?ed=2560",\n\t\t\t\t"type": "ws"\n\t\t\t  },\n\t\t\t  "type": "vless",\n\t\t\t  "uuid": "' + _0x595c92 + '"\n\t\t\t},\n\t\t\t{\n\t\t\t  "server": "' + a0_0x47da5f + '",\n\t\t\t  "server_port": ' + a0_0x4fe556 + ',\n\t\t\t  "tag": "CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '",\n\t\t\t  "tls": {\n\t\t\t\t"enabled": true,\n\t\t\t\t"server_name": "' + _0x2e29c2 + '",\n\t\t\t\t"insecure": false,\n\t\t\t\t"utls": {\n\t\t\t\t  "enabled": true,\n\t\t\t\t  "fingerprint": "chrome"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  "packet_encoding": "packetaddr",\n\t\t\t  "transport": {\n\t\t\t\t"headers": {\n\t\t\t\t  "Host": [\n\t\t\t\t\t"' + _0x2e29c2 + '"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t"path": "/?ed=2560",\n\t\t\t\t"type": "ws"\n\t\t\t  },\n\t\t\t  "type": "vless",\n\t\t\t  "uuid": "' + _0x595c92 + '"\n\t\t\t},\n\t\t\t{\n\t\t\t  "server": "' + a0_0x3d8136 + '",\n\t\t\t  "server_port": ' + a0_0x50f871 + ',\n\t\t\t  "tag": "CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '",\n\t\t\t  "tls": {\n\t\t\t\t"enabled": true,\n\t\t\t\t"server_name": "' + _0x2e29c2 + '",\n\t\t\t\t"insecure": false,\n\t\t\t\t"utls": {\n\t\t\t\t  "enabled": true,\n\t\t\t\t  "fingerprint": "chrome"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  "packet_encoding": "packetaddr",\n\t\t\t  "transport": {\n\t\t\t\t"headers": {\n\t\t\t\t  "Host": [\n\t\t\t\t\t"' + _0x2e29c2 + '"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t"path": "/?ed=2560",\n\t\t\t\t"type": "ws"\n\t\t\t  },\n\t\t\t  "type": "vless",\n\t\t\t  "uuid": "' + _0x595c92 + '"\n\t\t\t},\n\t\t\t{\n\t\t\t  "server": "' + a0_0x180f7f + '",\n\t\t\t  "server_port": ' + a0_0x48c020 + ',\n\t\t\t  "tag": "CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '",\n\t\t\t  "tls": {\n\t\t\t\t"enabled": true,\n\t\t\t\t"server_name": "' + _0x2e29c2 + '",\n\t\t\t\t"insecure": false,\n\t\t\t\t"utls": {\n\t\t\t\t  "enabled": true,\n\t\t\t\t  "fingerprint": "chrome"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  "packet_encoding": "packetaddr",\n\t\t\t  "transport": {\n\t\t\t\t"headers": {\n\t\t\t\t  "Host": [\n\t\t\t\t\t"' + _0x2e29c2 + '"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t"path": "/?ed=2560",\n\t\t\t\t"type": "ws"\n\t\t\t  },\n\t\t\t  "type": "vless",\n\t\t\t  "uuid": "' + _0x595c92 + '"\n\t\t\t},\n\t\t\t{\n\t\t\t  "tag": "direct",\n\t\t\t  "type": "direct"\n\t\t\t},\n\t\t\t{\n\t\t\t  "tag": "auto",\n\t\t\t  "type": "urltest",\n\t\t\t  "outbounds": [\n\t\t\t\t"CF_V8_' + a0_0x4e6d75 + '_' + a0_0x48ee7c + '",\n\t\t\t\t"CF_V9_' + a0_0x238252 + '_' + a0_0x14779b + '",\n\t\t\t\t"CF_V10_' + a0_0x3fbbd4 + '_' + a0_0x317c5b + '",\n\t\t\t\t"CF_V11_' + a0_0x47da5f + '_' + a0_0x4fe556 + '",\n\t\t\t\t"CF_V12_' + a0_0x3d8136 + '_' + a0_0x50f871 + '",\n\t\t\t\t"CF_V13_' + a0_0x180f7f + '_' + a0_0x48c020 + '"\n\t\t\t  ],\n\t\t\t  "url": "https://www.gstatic.com/generate_204",\n\t\t\t  "interval": "1m",\n\t\t\t  "tolerance": 50,\n\t\t\t  "interrupt_exist_connections": false\n\t\t\t}\n\t\t  ],\n\t\t  "route": {\n\t\t\t"rule_set": [\n\t\t\t  {\n\t\t\t\t"tag": "geosite-geolocation-!cn",\n\t\t\t\t"type": "remote",\n\t\t\t\t"format": "binary",\n\t\t\t\t"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs",\n\t\t\t\t"download_detour": "select",\n\t\t\t\t"update_interval": "1d"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"tag": "geosite-cn",\n\t\t\t\t"type": "remote",\n\t\t\t\t"format": "binary",\n\t\t\t\t"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs",\n\t\t\t\t"download_detour": "select",\n\t\t\t\t"update_interval": "1d"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"tag": "geoip-cn",\n\t\t\t\t"type": "remote",\n\t\t\t\t"format": "binary",\n\t\t\t\t"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs",\n\t\t\t\t"download_detour": "select",\n\t\t\t\t"update_interval": "1d"\n\t\t\t  }\n\t\t\t],\n\t\t\t"auto_detect_interface": true,\n\t\t\t"final": "select",\n\t\t\t"rules": [\n                          {\n                         "inbound": "tun-in",\n                          "action": "sniff"\n                          },\n                          {\n                          "protocol": "dns",\n                          "action": "hijack-dns"\n                           },\n                          {\n                           "port": 443,\n                          "network": "udp",\n                          "action": "reject"\n                          },\n\t\t\t  {\n\t\t\t\t"clash_mode": "Direct",\n\t\t\t\t"outbound": "direct"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"clash_mode": "Global",\n\t\t\t\t"outbound": "select"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"rule_set": "geoip-cn",\n\t\t\t\t"outbound": "direct"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"rule_set": "geosite-cn",\n\t\t\t\t"outbound": "direct"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"ip_is_private": true,\n\t\t\t\t"outbound": "direct"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t"rule_set": "geosite-geolocation-!cn",\n\t\t\t\t"outbound": "select"\n\t\t\t  }\n\t\t\t]\n\t\t  },\n\t\t  "ntp": {\n\t\t\t"enabled": true,\n\t\t\t"server": "time.apple.com",\n\t\t\t"server_port": 123,\n\t\t\t"interval": "30m",\n\t\t\t"detour": "direct"\n\t\t  }\n\t\t}';
}
