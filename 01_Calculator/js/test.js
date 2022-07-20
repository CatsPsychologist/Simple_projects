let x = '';
let y = '';
let operator = '';
let finish = false;

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
let operation = ['÷', '×', '-', '+'];

const screen = document.querySelector('.screen p')
// console.log(screen)

function clearAll (){
    x = '';
    y = '';
    operator = '';
    finish = false;
    screen.textContent = 0;

}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    if (screen.textContent === '0' && event.target.classList.contains('zero'))return;

    // if(screen.textContent.length === 9){
    //     return;
    // }
    screen.textContent = '';

    const key = event.target.textContent;

    if(numbers.includes(key)){
        if(y === '' && operator ===''){
            x += key;

            screen.textContent = x;
        }
        else if(x !== '' && y !== '' && finish ){
            y = key;
            finish = false;
            screen.textContent = y;
        }else {
            y += key;
            screen.textContent = y
        }
        console.log(x, y, operator)
        return;
    }

    if(operation.includes(key)){
        operator = key;
        screen.textContent = x;

        console.log(x, y, operator)

    }

    if(key === '='){
        if (y === '') y = x;

        switch (operator){
            case "+":
                x = +x + +y;
                break;
            case "-":
                x = x - y;
                break;
            case "×":
                x = x * y;
                break;
            case "÷":
                if (y === '0') {
                    screen.textContent = 'Ошибка'
                    x = '';
                    y = '';
                    operator = '';
                    return;
                }
                x = x / y;
                break;
        }
        finish = true;
        screen.textContent = x;
        console.log(x, y, operator)
s
    }
}

