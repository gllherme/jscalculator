const calculator = {
    display: [],

    addNumber(number) {
        calculator.display.push(number);
        console.log(calculator.display);
    },

    clearDisplay() {
        calculator.display.length = 0;
        console.log(calculator.display);
    },

    delete() {
        calculator.display.pop();
        console.log(calculator.display);
    }

}

const DOM = {
    displayContainer: document.querySelector(".calculator--display"),

    showContent() {
        let div = document.createElement('div');
        
    }
}


var x = document.querySelector('.display--text') === null;

let div = document.createElement('div')
let text = document.createTextNode('TEXTO')
div.appendChild(text);


console.log(x);
