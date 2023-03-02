
 const decrementBtn = document.querySelector('[data-action="decrement"]');
 const incrementBtn = document.querySelector('[data-action="increment"]');
 const valueCount = document.querySelector('#value');

 let counterValue = 0;

 decrementBtn.addEventListener('click', ondecrementBtnClick);
 incrementBtn.addEventListener('click', onincrementBtnClick);

 function ondecrementBtnClick () {
   
    counterValue = counterValue - 1;
    valueCount.textContent = counterValue;
 }

 function onincrementBtnClick () {
    counterValue += 1;
    valueCount.textContent = counterValue;
 }


