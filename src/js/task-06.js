const inputField = document.querySelector('#validation-input');

const trueValue = Number(inputField.dataset.length1);

inputField.addEventListener('blur', inputBlurHandler);

function inputBlurHandler () {
    console.log(inputField.value.length)
    console.log(trueValue)
    if (inputField.value.length === trueValue) {
        inputField.classList.remove('invalid')
        inputField.classList.add('valid')
    } else {
        inputField.classList.remove('valid')
        inputField.classList.add('invalid')
    }
}



