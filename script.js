const inputs = [...document.querySelectorAll('[data-input]')]
const cardInfo = document.querySelectorAll('[data-index]')
const wrongFormulas = document.querySelectorAll('.wrongFormula')

let flag = false;
inputs.forEach(input => input.addEventListener('keyup', (e) => {
    let inputNumber = input.dataset.input;
    let inputValue = e.target.value


    if (inputNumber == 1 && /^[a-zA-Z ]+$/.test(inputValue) || inputNumber == 1 && inputValue == '') {
        document.querySelector(`[data-index='${inputNumber}']`).textContent = inputValue
        if (inputValue == '') {
            flag = false

        }
    } else if (inputNumber == 1 && !(/^[a-zA-Z ]+$/.test(inputValue))) {
        inputs[inputNumber - 1].style.outline = '1px solid red'
        flag = true
    } else if (inputNumber == 2) {
        if (Number(inputValue) || inputValue == '') {
            document.querySelector(`[data-index='${inputNumber}']`).textContent = inputValue

            if (inputValue == '') {
                document.querySelector(`[data-index='${inputNumber}']`).textContent = '0000 0000 0000 0000'
                flag = false
            }
        } else {
            inputs[inputNumber - 1].style.outline = '1px solid red'
            flag = true
        }
    } else if (inputNumber == 3) {
        if (Number(inputValue) || inputValue == '') {
            document.querySelector(`[data-index='${inputNumber}']`).textContent = inputValue
            flag = false
        } else {
            flag = true
        }

    } else if (inputNumber == 4) {
        if (Number(inputValue) || inputValue == '') {
            document.querySelector(`[data-index='${inputNumber - 1}']`).textContent = inputValue
            flag = false
        } else {
            flag = true
        }
    } else if (inputNumber == 5) {
        if (Number(inputValue) || inputValue == '') {
            document.querySelector(`[data-index='${inputNumber}']`).textContent = inputValue
            flag = false
        } else {
            flag = true
        }
    }

    if (flag == true) {
        if (inputNumber == 4) {
            inputs[inputNumber - 1].style.outline = '1px solid red'
            wrongFormulas[inputNumber - 2].style.opacity = '1'
            return
        }
        if (inputNumber == 5) {
            inputs[inputNumber - 1].style.outline = '1px solid red'
            wrongFormulas[inputNumber - 2].style.opacity = '1'
            return
        }

        inputs[inputNumber - 1].style.outline = '1px solid red'
        wrongFormulas[inputNumber - 1].style.opacity = '1'
    } else if (flag == false) {
        if (inputNumber == 4) {
            inputs[inputNumber - 1].style.outline = '1px solid rgb(211, 211, 211)'
            wrongFormulas[inputNumber - 2].style.opacity = '0';

        } else if (inputNumber == 5) {
            inputs[inputNumber - 1].style.outline = '1px solid rgb(211, 211, 211)'
            wrongFormulas[inputNumber - 2].style.opacity = '0';
        } else {
            inputs[inputNumber - 1].style.outline = '1px solid rgb(211, 211, 211)'
            wrongFormulas[inputNumber - 1].style.opacity = '0';
        }

    }



}))