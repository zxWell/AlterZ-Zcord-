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