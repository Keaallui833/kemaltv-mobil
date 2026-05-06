// auth.js
const firebaseConfig = {
    apiKey: "AIzaSyC9R9X3FxqgNQ5kWerDmLRSyijbnquoRzg",
    authDomain: "kemaltv-95504.firebaseapp.com",
    databaseURL: "https://kemaltv-95504-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kemaltv-95504",
    storageBucket: "kemaltv-95504.firebasestorage.app",
    messagingSenderId: "1061917735137",
    appId: "1:1061917735137:web:5d95ceef5fe479094b9fa0"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function handleAuth(mode) {
    const u = document.getElementById(mode === 'login' ? 'log-user' : 'reg-user').value.trim();
    const p = document.getElementById(mode === 'login' ? 'log-pass' : 'reg-pass').value.trim();

    if(mode === 'register') {
        db.ref('users/' + u).set({ password: p, role: 'user' }).then(() => {
            alert("Başarıyla kayıt oldun Kemal TV'ye!");
        });
    } else {
        db.ref('users/' + u).once('value').then(snap => {
            if(snap.exists() && snap.val().password === p) {
                localStorage.setItem('kemal_user', u);
                localStorage.setItem('kemal_role', snap.val().role || 'user');
                window.location.href = 'oda.html';
            } else { alert("Şifre yanlış veya böyle biri yok!"); }
        });
    }
}
