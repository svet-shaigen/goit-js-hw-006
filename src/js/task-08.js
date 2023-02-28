const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formSubmitHundler);

function formSubmitHundler(event) {
   event.preventDefault()

   const emailValue = event.currentTarget.email.value;
   const passwordValue = event.currentTarget.password.value;
   console.log(event.currentTarget.email.value);
   if(!emailValue || !passwordValue) {
      return alert('Попередження: всі поля повинні бути заповнені!');
   }
   console.log({emailValue, passwordValue});
   formEl.reset();
}