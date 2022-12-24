let currentOperator;
let currentNum = 0;
let currentNum2 = 0;
let dot = "";
let equals = false;

const val = document.querySelector("#val")
const clearbtn = document.querySelector("#clear")
const keys = document.querySelectorAll("#in button")

let operate = function(operator, a, b) {
    switch (operator) {
        case '+': return a + b
        case '-': return a - b
        case 'x': return a * b
        case '÷': return a / b
    }
}

clearbtn.onclick = function(){
    val.innerText = "0"
    currentOperator = null;
    currentNum = 0;
    currentNum2 = 0;
    dot = "";
    equals = false;
}
let onclick = function(element) {
    let action = element.target.innerText
    
    if (!isNaN(action)) {        
        if (currentOperator) {
            currentNum2 = Number(String(currentNum2)+dot+action)
        }else{
            currentNum = Number(String(currentNum)+dot+action)
        }
        if (val.innerText=="0"){val.innerText=""}
        val.innerText += action

        return
    }

    if (action == ".") {
        if (val.innerText.slice(-1) !== "." && !equals) {
            dot = "."
            val.innerText += dot
        }
        return
    }
    dot=""

    if (currentNum2==0 && currentOperator) {
        let valS = val.innerText
        val.innerText = valS.substring(0, valS.length-1);
    }
    if (currentNum2 && currentOperator) {
        console.log(currentNum, currentNum2)
        currentNum = operate(currentOperator, currentNum, currentNum2)
        currentNum2 = 0
        val.innerText = String(currentNum)
    }
    if (action == "=") {currentOperator = null; equals=true; return}
    equals=false

    currentOperator = action
    val.innerText += action
}

for (let btn in keys) {
    let element = keys[btn]
    if (!element.nodeType) {continue}

    element.onclick = onclick
}