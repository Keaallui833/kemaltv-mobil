// admin-panel.js
const currentUser = localStorage.getItem('kemal_user');

if (currentUser && currentUser.toLowerCase() === 'kemal') {
    const bar = document.createElement('div');
    bar.style = "background:#ffd700; color:black; padding:10px; font-weight:bold; text-align:center; position:fixed; top:0; width:100%; z-index:999;";
    bar.innerHTML = `HOŞ GELDİN KEMAL - <button onclick="window.location.href='admin.html'" style="cursor:pointer;">YÖNETİMİ AÇ</button>`;
    document.body.prepend(bar);
}
