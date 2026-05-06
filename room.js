// room.js
const currentUser = localStorage.getItem('kemal_user');
if(currentUser) {
    document.getElementById('auth-section').classList.remove('active');
    document.getElementById('room-section').classList.add('active');
    
    document.getElementById('room-section').innerHTML = `
        <div class="video-box" id="player">HDMI Sinyali Bekleniyor...</div>
        <div class="chat-box">
            <div id="msg-list"></div>
            <div class="input-bar">
                <input type="text" id="m" style="flex:1" placeholder="Mesaj yaz...">
                <button onclick="send()" style="background:#ef4444; color:white; padding:10px 20px;">></button>
            </div>
        </div>
    `;

    // Mesajları Dinle
    db.ref('rooms/genel/chats').on('child_added', s => {
        const d = s.val();
        const div = document.createElement('div');
        div.style.padding = "10px";
        div.style.background = d.u === currentUser ? "#ef4444" : "#1e293b";
        div.style.borderRadius = "10px";
        div.innerHTML = `<strong>${d.u}:</strong> ${d.t}`;
        document.getElementById('msg-list').appendChild(div);
        document.getElementById('msg-list').scrollTop = document.getElementById('msg-list').scrollHeight;
    });

    // HDMI Dinle
    db.ref('rooms/genel/currentVideo').on('value', s => {
        const v = s.val();
        if(v && v.url) {
            let id = v.url.includes('v=') ? v.url.split('v=')[1].split('&')[0] : v.url.split('youtu.be/')[1];
            document.getElementById('player').innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" style="width:100%;height:100%" allow="autoplay;fullscreen"></iframe>`;
        }
    });
}
function send() {
    const t = document.getElementById('m').value;
    if(t) db.ref('rooms/genel/chats').push({ u: currentUser, t: t });
    document.getElementById('m').value = "";
}
