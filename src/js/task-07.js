

const inputFontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

spanText.style.fontSize = `${inputFontSize.value}px`;

inputFontSize.addEventListener('input', changingSpanText);

function changingSpanText () {
    spanText.style.fontSize = `${inputFontSize.value}px`;
}

