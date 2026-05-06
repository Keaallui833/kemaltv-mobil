// admin.js
if(localStorage.getItem('kemal_user') === 'L.kemal.16') {
    const adminBar = document.createElement('div');
    adminBar.innerHTML = "ADMİN PANELİ (HDMI BASMAK İÇİN TIKLA)";
    adminBar.style.cssText = "background:#ffd700; color:black; text-align:center; padding:10px; cursor:pointer; font-weight:bold;";
    document.body.prepend(adminBar);
    
    adminBar.onclick = () => {
        const link = prompt("YouTube Linkini Yapıştır Kemal:");
        if(link) db.ref('rooms/genel/currentVideo').set({ url: link });
    };
}
