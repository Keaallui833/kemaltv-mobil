// auth.js
const authSection = document.getElementById('auth-layer');
authSection.innerHTML = `
    <div style="padding: 50px; text-align: center; height: 100vh; background: #050505;">
        <h1 style="color:#ef4444; margin-bottom:40px;">KEMAL TV</h1>
        <div id="auth-box" style="background:#111; padding:30px; border-radius:20px; border:1px solid #ef4444;">
            <input type="text" id="user" placeholder="Kullanıcı Adı" style="width:100%; margin-bottom:15px;"><br>
            <input type="password" id="pass" placeholder="Şifre" style="width:100%; margin-bottom:25px;"><br>
            <button onclick="handleAuth('login')" style="width:100%; padding:15px; background:#ef4444; color:white; border:none; border-radius:10px; margin-bottom:10px; font-weight:bold;">GİRİŞ YAP</button>
            <button onclick="handleAuth('reg')" style="width:100%; padding:15px; background:#333; color:white; border:none; border-radius:10px; font-weight:bold;">KAYIT OL</button>
        </div>
    </div>
`;

function handleAuth(type) {
    const u = document.getElementById('user').value.trim();
    const p = document.getElementById('pass').value.trim();
    if(!u || !p) return alert("Eksiksiz doldur Kemal!");

    if(type === 'reg') {
        db.ref('users/' + u).set({ p: p }).then(() => alert("Kayıt Başarılı! Şimdi Giriş Yap."));
    } else {
        db.ref('users/' + u).once('value').then(s => {
            if(s.exists() && s.val().p === p) {
                localStorage.setItem('k_user', u);
                location.reload();
            } else { alert("Hatalı Bilgi!"); }
        });
    }
}
