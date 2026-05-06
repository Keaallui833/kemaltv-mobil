const config = {
    apiKey: "AIzaSyC9R9X3FxqgNQ5kWerDmLRSyijbnquoRzg",
    databaseURL: "https://kemaltv-95504-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kemaltv-95504"
};
firebase.initializeApp(config);
const db = firebase.database();
let mode = 'login';

function setMode(m) {
    mode = m;
    document.getElementById('l-tab').className = m === 'login' ? 'active' : '';
    document.getElementById('r-tab').className = m === 'reg' ? 'active' : '';
}

function auth() {
    const u = document.getElementById('u').value.trim();
    const p = document.getElementById('p').value.trim();
    if(!u || !p) return alert("Boş bırakma Kemal!");
    
    if(mode === 'reg') {
        db.ref('users/' + u).set({ p: p, role: (u === 'L.kemal.16' ? 'admin' : 'user') }).then(() => alert("Kayıt Başarılı!"));
    } else {
        db.ref('users/' + u).once('value').then(s => {
            if(s.exists() && s.val().p === p) {
                localStorage.setItem('kemal_user', u);
                window.location.href = 'oda.html';
            } else { alert("Hatalı giriş!"); }
        });
    }
}
