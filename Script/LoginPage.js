document.title = "Login | 登录 - LocalWu Content Manager"

let Copyright = document.getElementById('Copyright');
Copyright.textContent = 'Copyright © LocalWu. Passion Drives.';
let SystemName = document.getElementById('SystemName');
SystemName.textContent = '登录';

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let Username = document.getElementById('Username').value;
    let Password = document.getElementById('Password').value;
    let ErrorMessage = document.getElementById('ErrorMessage');
    if (Username === 'your_Username' && Password === 'your_Password' && false) {
        // window.location.href = '/dashboard.html';
    } else {
        ErrorMessage.textContent = 'Invalid Username Or Password';
        setTimeout(() => {
            ErrorMessage.textContent = '';
        }, 3000);
    }
});
