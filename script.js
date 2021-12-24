let result = null;
let operationSign = null;
let memory = 0;

const calculator = {
    display: [],

    addNumber(number) {
        if(this.display.length < 16) {
            this.display.push(number);
            // console.log(calculator.display);
            calculator.updateDisplay();
        } else {
            return {}
        }
    },

    clearDisplay() {
        calculator.display.length = 0;
        calculator.updateDisplay();
        // console.log(calculator.display);
    },

    updateDisplay() {
        const newDisplay = calculator.display.join("");
        let content = document.querySelector('.display--text');

        if (this.display.length < 9) {
            content.style.fontSize = "76px"
        } else {
            content.style.fontSize = `${68 - (this.display.length - 5) * 3}px`
        }

        content.innerHTML = newDisplay;
    },

    updateMemory() {
        if (this.display.length > 0) {
            memory = parseInt(calculator.display.join(""));
        } else {
            memory = 0;
        }
    },

    updateResult() {
        result = parseInt(calculator.display.join(""));
    },

    clearMemory() {
        memory = 0;
    },

    clearButton() {
        this.clearDisplay()
        this.clearMemory()
    },

    operation(sign) {
        if (sign == "+") {
            this.updateMemory();
            this.clearDisplay();
            operationSign = "+";

        } else if (sign == "-") {
            this.updateMemory();
            this.clearDisplay();
            operationSign = "-";

        } else if (sign == "*") {
            this.updateMemory();
            this.clearDisplay();
            operationSign = "*";

        } else if (sign == "/") {
            this.updateMemory();
            this.clearDisplay();
            operationSign = "/";
        }
    },

    resultButton() {
        if (operationSign == "+") {
            let newDisplay = parseInt(this.display.join(""));
            result = memory + newDisplay;
            let strResult = result.toString();
            calculator.display = strResult.split("");
            this.updateDisplay();

        } else if (operationSign == "-") {
            let newDisplay = parseInt(this.display.join(""));
            result = memory - newDisplay;
            let strResult = result.toString();
            calculator.display = strResult.split("");
            this.updateDisplay();

        } else if (operationSign == "*") {
            let newDisplay = parseInt(this.display.join(""));
            result = memory * newDisplay;
            let strResult = result.toString();
            calculator.display = strResult.split("");
            this.updateDisplay();
            
        } else if (operationSign == "/") {
            let newDisplay = parseInt(this.display.join(""));
            result = memory / newDisplay;
            let strResult = result.toString();
            calculator.display = strResult.split("");
            this.updateDisplay();
        }

    }
}
