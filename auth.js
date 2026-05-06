// auth.js
const authSection = document.getElementById('auth-layer');
authSection.innerHTML = `
    <div style="padding: 40px; display: flex; align-items: center; justify-content: center; height: 100vh; background: #050505;">
        <div style="background: #111; padding: 35px; border-radius: 25px; border: 1px solid #ef4444; width: 100%; max-width: 380px; text-align: center;">
            <h1 style="color:#ef4444; margin-bottom:30px; font-size: 32px; letter-spacing: 2px;">KEMAL TV</h1>
            
            <input type="text" id="user_id" placeholder="Kullanıcı Adı">
            <input type="password" id="pass_id" placeholder="Şifre">
            
            <div class="auth-btn-group">
                <button onclick="handleAuth('login')" class="primary-btn">SİSTEME BAĞLAN</button>
                <button onclick="handleAuth('reg')" class="secondary-btn">YENİ KAYIT OLUŞTUR</button>
            </div>
        </div>
    </div>
`;

function handleAuth(type) {
    // ID'leri yukarıdakilerle eşitledim, artık "bulamama" ihtimali yok.
    const u = document.getElementById('user_id').value.trim();
    const p = document.getElementById('pass_id').value.trim();

    if(!u || !p) {
        alert("Kemal, alanları boş bırakma kardeşim!");
        return;
    }

    if(type === 'reg') {
        // Kayıt işlemi
        db.ref('users/' + u).set({ p: p }).then(() => {
            alert("Kayıt ok! Şimdi giriş yapabilirsin.");
        }).catch(err => alert("Hata: " + err.message));
    } else {
        // Giriş işlemi
        db.ref('users/' + u).once('value').then(s => {
            if(s.exists() && s.val().p === p) {
                localStorage.setItem('k_user', u);
                location.reload(); // Her şeyi içeri aktarıp uygulamayı başlatır
            } else {
                alert("Kullanıcı adı veya şifre hatalı, tekrar dene.");
            }
        });
    }
}
