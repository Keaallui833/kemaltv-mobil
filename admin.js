if(localStorage.getItem('user') === 'L.kemal.16') {
    const btn = document.createElement('button');
    btn.innerText = "HDMI VER";
    btn.style.cssText = "position:fixed; top:10px; right:10px; z-index:99; background:gold; color:black; padding:10px;";
    document.body.appendChild(btn);
    btn.onclick = () => {
        const link = prompt("YouTube Linki:");
        if(link) db.ref('rooms/genel/currentVideo').set({ url: link });
    };
}
