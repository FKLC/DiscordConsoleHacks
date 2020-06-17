const deafen_regex = /self_deafs.truem/;
const decoder = new TextDecoder();

WebSocket.prototype._send = WebSocket.prototype.send;
WebSocket.prototype.send = function (data) {
    if (data instanceof ArrayBuffer && deafen_regex.test(decoder.decode(data))) {
        window.deafen = (function () {
            this._send(data);
        }).bind(this);
    }
    this._send(data);
}