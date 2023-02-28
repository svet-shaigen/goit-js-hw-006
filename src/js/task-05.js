/*<input type="text" id="name-input" placeholder="Please enter your name" />
    <h1>Hello, <span id="name-output">Anonymous</span>!</h1>*/

    const nameInput = document.querySelector('#name-input');
    const nameOutput = document.querySelector('name-output');

    nameInput.addEventListener('input', (event) => {
       console.log(event);
        //event.target.textContent = ;
    })