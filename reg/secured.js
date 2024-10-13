document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.querySelector('#loginFormInput[typt=text"').value;
    var password = document.querySelector('#loginFormInput[type="password"').value;

    if(isUserValid(username, password)) {
        window.Location.href='./chat/baZa.html';
    }else{
        alert('ты обосрался :3:3:3XDXDXD');
    };
});

function isUserValid(username, password) {
    return username === 'myusername' && password === 'mypassword';
};