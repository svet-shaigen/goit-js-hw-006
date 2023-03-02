const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formSubmitHundler);

function formSubmitHundler(event) {
   event.preventDefault()

   const email = event.currentTarget.email.value;
   const password = event.currentTarget.password.value;
   
   if(!email || !password) {
      return alert('Попередження: всі поля повинні бути заповнені!');
   }
   console.log({email, password});
   formEl.reset();
}