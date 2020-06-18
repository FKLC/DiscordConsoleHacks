const deafen_regex = /self_deafs.truem/;
const decoder = new TextDecoder();

WebSocket.prototype._send = WebSocket.prototype.send;
WebSocket.prototype.send = function (data) {
    if (data instanceof ArrayBuffer && deafen_regex.test(decoder.decode(data))) {
        window.deafen = (function () {
            this._send(data);
        }).bind(this);

        if (!document.querySelector("button[aria-label='Deafen'][style]")) {
            let deafen_btn = document.querySelector("button[aria-label='Deafen']");
            let fake_deafen_btn = deafen_btn.cloneNode(true);
            fake_deafen_btn.style.backgroundColor = 'red';
            fake_deafen_btn.onclick = () => window.deafen();
            deafen_btn.parentNode.insertBefore(fake_deafen_btn, deafen_btn);
        }
    }
    this._send(data);
}