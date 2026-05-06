const authDiv = document.getElementById('screen-auth');
authDiv.innerHTML = `
    <div style="padding: 40px; text-align: center;">
        <h1 style="color:red; margin-bottom:20px;">KEMAL TV</h1>
        <input type="text" id="u" placeholder="Kullanıcı"><br><br>
        <input type="password" id="p" placeholder="Şifre"><br><br>
        <button onclick="doLogin()" style="width:100%">GİRİŞ YAP</button>
    </div>
`;
function doLogin() {
    const user = document.getElementById('u').value.trim();
    if(user) { localStorage.setItem('user', user); location.reload(); }
}
