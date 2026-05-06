const user = localStorage.getItem('user');
if(user) {
    document.getElementById('screen-auth').classList.remove('active');
    document.getElementById('screen-app').classList.add('active');

    db.ref('rooms/genel/currentVideo').on('value', s => {
        const url = s.val()?.url;
        if(url) {
            let id = url.includes('v=') ? url.split('v=')[1].split('&')[0] : url.split('youtu.be/')[1];
            document.getElementById('video-frame').innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" allow="autoplay;fullscreen"></iframe>`;
        }
    });

    db.ref('rooms/genel/chats').on('child_added', s => {
        const d = s.val();
        const m = document.createElement('div');
        m.innerHTML = `<b style="color:red">${d.u}:</b> ${d.t}`;
        document.getElementById('msg-box').appendChild(m);
        document.getElementById('msg-box').scrollTop = document.getElementById('msg-box').scrollHeight;
    });
}
function send() {
    const t = document.getElementById('m-text').value;
    if(t) { db.ref('rooms/genel/chats').push({ u: user, t: t }); document.getElementById('m-text').value = ""; }
}
