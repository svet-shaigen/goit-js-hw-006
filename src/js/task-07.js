

const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

spanText.style.fontSize = `${input.value}px`;

input.addEventListener('input', changingSpanText);

function changingSpanText () {
    spanText.style.fontSize = `${input.value}px`;
}

