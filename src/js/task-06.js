const inputField = document.querySelector('#validation-input');

const trueValue = Number(inputField.dataset.length);


//inputField.addEventListener('blur', () => {
    const inputBlurHandler = () => {
    if (inputField.value.length === trueValue) {
        inputField.classList.remove('invalid')
        inputField.classList.add('valid')
    } else {
        inputField.classList.remove('valid')
        inputField.classList.add('invalid')
    }
}



inputField.addEventListener('blur', inputBlurHandler);