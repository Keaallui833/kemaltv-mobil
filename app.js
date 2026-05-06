// app.js
const me = localStorage.getItem('k_user');

if(me) {
    document.getElementById('auth-layer').classList.remove('active');
    document.getElementById('app-layer').style.display = 'flex';
    document.getElementById('app-layer').style.flexDirection = 'column';

    // HDMI (VİDEO) GÜNCELLEMELERİNİ TAKİP ET
    db.ref('rooms/genel/currentVideo').on('value', snap => {
        const url = snap.val()?.url;
        if(url) {
            let id = url.includes('v=') ? url.split('v=')[1].split('&')[0] : url.split('youtu.be/')[1];
            document.getElementById('player-container').innerHTML = 
                `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" allow="autoplay;fullscreen"></iframe>`;
        }
    });

    // MESAJLARI TAKİP ET
    db.ref('rooms/genel/chats').on('child_added', snap => {
        const d = snap.val();
        const div = document.createElement('div');
        div.innerHTML = `<span style="color:#ef4444; font-weight:bold;">${d.u}:</span> ${d.t}`;
        document.getElementById('messages').appendChild(div);
        document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
    });
}

// LINKI YAYINA VERME FONKSİYONU
function updateStream() {
    const url = document.getElementById('stream-url').value;
    if(url) {
        db.ref('rooms/genel/currentVideo').set({ url: url })
          .then(() => { alert("Yayın Güncellendi!"); document.getElementById('stream-url').value = ""; });
    }
}

function sendMessage() {
    const inp = document.getElementById('m-input');
    if(inp.value.trim()) {
        db.ref('rooms/genel/chats').push({ u: me, t: inp.value });
        inp.value = "";
    }
}
