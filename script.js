const inputs = [...document.querySelectorAll('[data-input]')]
const cardInfo = document.querySelectorAll('[data-index]')


inputs.forEach(input => input.addEventListener('keyup', (e) => {
        let inputNumber = input.dataset.input;
        let inputValue = e.target.value
        if (inputNumber == 2) {
            if (Number(inputValue) || inputValue == '') {
                document.querySelector(`[data-index='${inputNumber}']`).textContent = inputValue
                inputs[inputNumber - 1].style.outline = '1px solid rgb(211, 211, 211)'
            } else {
                inputs[inputNumber - 1].style.outline = '1px solid red'
            }
        }

        if (inputValue == '') {
            document.querySelector(`[data-index='${inputNumber}']`).textContent = '0000 0000 0000 0000'
        }

        if (inputNumber == 1) {
            document.querySelector(`[data-index='${inputNumber}']`).textContent = inputValue
        }


        if (inputNumber == 5) {
            document.querySelector(`[data-index='${inputNumber}']`).textContent = inputValue
        }

    }



))