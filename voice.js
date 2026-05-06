// voice.js
let myStream;
const peer = new Peer(); // Otomatik ID oluşturur

async function toggleMic() {
    const btn = document.getElementById('mic-btn');
    if (!myStream) {
        try {
            myStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            btn.classList.add('active');
            // Burada diğer kullanıcılara bağlanan bir loop olmalı (Gelişmiş versiyon)
            alert("Mikrofonun Açıldı!");
        } catch (err) { alert("Mikrofon izni verilmedi!"); }
    } else {
        myStream.getTracks().forEach(track => track.stop());
        myStream = null;
        btn.classList.remove('active');
        alert("Mikrofon Kapatıldı.");
    }
}
