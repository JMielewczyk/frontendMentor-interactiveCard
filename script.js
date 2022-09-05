const inputs = [...document.querySelectorAll('[data-input]')]
const cardInfo = document.querySelectorAll('[data-index]')
const wrongFormulas = document.querySelectorAll('.wrongFormula')
const btns = document.querySelectorAll('button')
const cardWrapper = document.querySelector('.cardWrapper')
const completeState = document.querySelector('.completeState')

inputs.forEach(input => input.addEventListener('keyup', (e) => {
    let inputNumber = input.dataset.input;
    let inputValue = e.target.value
    let flag = false;

    if (inputNumber == 1 && /^[a-zA-Z ]+$/.test(inputValue) || inputNumber == 1 && inputValue == '') {
        cardInfo[inputNumber].textContent = inputValue.toUpperCase()
        if (inputValue == '') {
            flag = false
            cardInfo[inputNumber].textContent = 'JANE APPLESEED'
        }
    } else if (inputNumber == 1 && !(/^[a-zA-Z ]+$/.test(inputValue))) {
        inputs[inputNumber - 1].style.outline = '1px solid red'
        flag = true
    } else if (inputNumber == 2) {
        if (Number(inputValue) || inputValue == '') {
            cardInfo[inputNumber - 2].textContent = inputValue

            if (inputValue == '') {
                cardInfo[inputNumber - 2].textContent = '0000 0000 0000 0000'
                flag = false
            }
        } else {
            inputs[inputNumber - 1].style.outline = '1px solid red'
            flag = true
        }
    } else if (inputNumber == 3) {
        if (Number(inputValue) <= 12 && Number(inputValue) > 9 || inputValue == '') {
            cardInfo[inputNumber].textContent = inputValue
            flag = false
        } else if (Number(inputValue) <= 9) {
            cardInfo[inputNumber].textContent = '0' + inputValue
        } else {
            flag = true
        }

        if (inputValue == '') {
            cardInfo[inputNumber].textContent = '00'
        }
    } else if (inputNumber == 4) {
        if (Number(inputValue) < 40 && Number(inputValue) > 9 || inputValue == '') {
            cardInfo[inputNumber - 2].textContent = inputValue
            flag = false
        } else if (Number(inputValue) <= 9) {
            cardInfo[inputNumber - 2].textContent = '0' + inputValue
        } else {
            flag = true
        }

        if (inputValue == '') {
            cardInfo[inputNumber - 2].textContent = '00'
        }
    } else if (inputNumber == 5) {
        if (Number(inputValue) || inputValue == '') {
            cardInfo[inputNumber - 1].textContent = inputValue
            flag = false
        } else {
            flag = true
        }

        if (inputValue == '') {
            cardInfo[inputNumber - 1].textContent = '000'
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


btns.forEach(btn => btn.addEventListener('click', () => {
    cardWrapper.classList.toggle('noActive')
    completeState.classList.toggle('noActive')
}))