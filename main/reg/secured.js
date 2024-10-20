// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var username = document.querySelector('#loginFormInput[typt=text"').value;
//     var password = document.querySelector('#loginFormInput[type="password"').value;

//     if(isUserValid(username, password)) {
//         window.Location.href='./chat/baZa.html';
//     }else{
//         alert('ты обосрался :3:3:3XDXDXD');
//     };
// });

// function isUserValid(username, password) {
//     return username === 'myusername' && password === 'mypassword';
// };


const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Предотвращаем стандартное поведение формы

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Здесь вы можете добавить логику для отправки данных на сервер
      // или выполнить другие действия, связанные с регистрацией

      console.log('Регистрация успешна!');
      console.log('Имя пользователя:', username);
      console.log('Email:', email);
      console.log('Пароль:', password);

      // Очистка полей формы
      registrationForm.reset();
    });