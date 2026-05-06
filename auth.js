// auth.js
const authHTML = `
    <div class="auth-container">
        <div class="card">
            <h1>KEMAL TV</h1>
            <input type="text" id="u" placeholder="Kullanıcı Adı">
            <input type="password" id="p" placeholder="Şifre">
            <button onclick="login()" style="background:#ef4444; color:white; width:100%; padding:15px; margin-bottom:10px;">GİRİŞ YAP</button>
            <button onclick="register()" style="background:#334155; color:white; width:100%; padding:15px;">KAYIT OL</button>
        </div>
    </div>
`;
document.getElementById('auth-section').innerHTML = authHTML;

function login() {
    const user = document.getElementById('u').value.trim();
    const pass = document.getElementById('p').value.trim();
    db.ref('users/' + user).once('value').then(s => {
        if(s.exists() && s.val().p === pass) {
            localStorage.setItem('kemal_user', user);
            location.reload(); // Sayfayı yenile ve odaya geç
        } else { alert("Hatalı!"); }
    });
}
function register() {
    const user = document.getElementById('u').value.trim();
    const pass = document.getElementById('p').value.trim();
    db.ref('users/' + user).set({ p: pass }).then(() => alert("Kayıt Başarılı!"));
}
