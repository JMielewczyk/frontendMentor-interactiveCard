const inputs = [...document.querySelectorAll('[data-input]')]
const cardText = document.querySelectorAll('[data-index]')
const wrongFormulas = [...document.querySelectorAll('.wrongFormula')]
const btns = document.querySelectorAll('button')
const startState = document.querySelector('.startState')
const completeState = document.querySelector('.completeState')
let inputValue;
let emptyInputs = [];
let flag;
let nameLength;
let cardNumberLength;
let cvcLength;


inputs.forEach(input => input.addEventListener('keyup', (e) => {
    let inputNumber = input.dataset.input;
    inputValue = e.target.value
    let inputTarget = e.target
    flag = false;
    inputTarget.nextElementSibling.textContent = 'Wrong format'
    userDate = Number(inputs[2].value) + Number(inputs[3].value)


    switch (Number(inputNumber)) {
        case 1:
            nameLength = inputValue.length;
            if (/^[a-zA-Z ]+$/.test(inputValue) || !inputValue) {
                cardText[inputNumber].textContent = inputValue.toUpperCase()
                if (!inputValue) {
                    flag = false
                    cardText[inputNumber].textContent = 'JANE APPLESEED'
                }
            } else if (!(/^[a-zA-Z ]+$/.test(inputValue))) {
                inputs[inputNumber - 1].style.outline = '1px solid red'
                flag = true
            }
            break;
        case 2:
            cardNumberLength = inputValue.length;
            if (Number(inputValue) || !inputValue) {
                cardText[inputNumber - 2].textContent = inputValue
                if (!inputValue) {
                    cardText[inputNumber - 2].textContent = '0000 0000 0000 0000'
                    flag = false
                }

            } else {
                inputs[inputNumber - 1].style.outline = '1px solid red'
                flag = true
            }
            break;
        case 3:
            if (Number(inputValue) <= 12 && Number(inputValue) > 9 || !inputValue) {
                wrongFormulas[2].textContent = 'Wrong format'
                cardText[inputNumber].textContent = inputValue
                flag = false
                if (!inputValue) {
                    cardText[inputNumber].textContent = '00'
                }
            } else if (Number(inputValue) <= 9) {
                cardText[inputNumber].textContent = '0' + inputValue
            } else {
                flag = true
            }
            break;
        case 4:
            if (Number(inputValue) < 40 && Number(inputValue) > 9 || !inputValue) {
                cardText[inputNumber - 2].textContent = inputValue
                flag = false
                if (!inputValue) {
                    cardText[inputNumber - 2].textContent = '00'
                }
            } else if (Number(inputValue) <= 9) {
                cardText[inputNumber - 2].textContent = '0' + inputValue
            } else {
                flag = true
            }
            break;
        case 5:
            cvcLength = inputValue.length;
            if (Number(inputValue) || !inputValue) {
                wrongFormulas[3].textContent = 'Wrong format'
                cardText[inputNumber - 1].textContent = inputValue
                flag = false
                if (!inputValue) {
                    cardText[inputNumber - 1].textContent = '000'
                }
            } else {
                flag = true
            }
    }


    /*-----------------FLAG-----------------*/

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
            inputs[inputNumber - 2].style.outline = '1px solid rgb(211, 211, 211)'
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
    if (nameLength < 3) {
        inputs[0].style.outline = '1px solid red'
        inputs[0].nextElementSibling.textContent = 'Name is too short'
        inputs[0].nextElementSibling.style.opacity = '1'
        flag = true
    }

    if (cardNumberLength < 16) {
        inputs[1].style.outline = '1px solid red'
        inputs[1].nextElementSibling.textContent = 'Card number is too short'
        inputs[1].nextElementSibling.style.opacity = '1'
        flag = true
    }

    if (cvcLength < 3) {
        inputs[4].style.outline = '1px solid red'
        inputs[4].nextElementSibling.textContent = 'CVC number is too short'
        inputs[4].nextElementSibling.style.opacity = '1'
        flag = true
    }


    emptyInputs = inputs.filter(input => input.value.length == 0)
    inputs.forEach(input => {
        if (input.style.outline === '1px solid red') {
            flag = true;
        }
    })

    if (emptyInputs.length == 0 && flag === false) {
        console.log('completeState')
        startState.classList.toggle('noActive')
        completeState.classList.toggle('noActive')
        btn.textContent = 'Continue'
    } else {
        emptyInputs.forEach(emptyInput => {
            emptyInput.style.outline = '1px solid red'
            emptyInput.style.opacity = '1';
            emptyInput.nextElementSibling.textContent = "Can't be blank"
            emptyInput.nextElementSibling.style.opacity = "1"
        })
    }


    if (completeState.classList.length == 2) {
        btn.textContent = 'Continue'
    } else {
        btn.textContent = 'Confirm'
    }


}))