

    const nameInput = document.querySelector('#name-input');
    const nameOutput = document.querySelector('#name-output');

    // nameInput.addEventListener('input', (event) => {
    //     nameOutput.textContent = event.currentTarget.value || 'Anonymous';
    // })

    nameInput.addEventListener('input', changeSpanText)
    
    function changeSpanText(event) {
        // console.log(event.target.value)
        let inputValue = event.target.value
        console.log(inputValue)
        nameOutput.textContent = inputValue
        if(!inputValue) {
            nameOutput.textContent = 'Anonymous' 
        }
        
    }
