let lastOperation = "";
let numberOfOps = 0;
let displayText = document.getElementById("screen-bottom");

let numberButtonValues = [...document.getElementsByClassName("number-button")];
if(numberButtonValues){
    clearDisplay();
    numberButtonValues.forEach(function(element){
        element.addEventListener("click", function(){
            let numberValue = element.textContent;
            displayText.innerHTML += numberValue;
        })
    });
}

let operationButtons = [...document.getElementsByClassName("operation-button")];
if(operationButtons){
    operationButtons.forEach(function(operation){
        operation.addEventListener("click", function(){
            numberOfOps++;
            if(numberOfOps >= 2 && lastOperation != "="){
                let calculatedNum = calculateAnswer();
                displayText.innerHTML = calculatedNum += operation.textContent;
                }else{
                    let opValue = operation.textContent;
                    displayText.innerHTML += opValue;
                    lastOperation = opValue;
                }
        })
    });
}


let factorialButton = document.getElementById("factorial");
factorialButton.addEventListener("click", function(){
    displayText.innerHTML += "!";
    lastOperation = factorialButton.innerHTML;
})

let exponentButton = document.getElementById("exponent");
exponentButton.addEventListener("click", function(){
    if(displayText.innerHTML != ""){
        numberOfOps++;
        displayText.innerHTML += "^";
    }
})

let equalsButton = document.getElementById("equals-button");
equalsButton.addEventListener("click", function(){
    lastOperation = equalsButton.innerHTML;
});

equalsButton.addEventListener("click", calculateAnswer);

function calculateAnswer(){
    let currentDisplayText = document.getElementById("screen-bottom");
    displayTopHalf = document.getElementById("screen-top");
    displayTopHalf.innerHTML = currentDisplayText.innerHTML;
    for(let i = 0; i < currentDisplayText.innerHTML.length; i++){
        if(currentDisplayText.innerHTML[i] == "+"){
            console.log(currentDisplayText.innerHTML[i]);
            let displayNumbers = currentDisplayText.innerHTML.split("+");
            let first_number = displayNumbers[0];
            console.log(first_number);
            let second_number = displayNumbers[1];
            console.log(second_number);
            if(!first_number || !second_number){
                currentDisplayText.innerHTML = "Error";
            }else{
                currentDisplayText.innerHTML = (Number(first_number) + Number(second_number)).toFixed(12);
                return currentDisplayText.innerHTML;
            }
            break;
        }else if(currentDisplayText.innerHTML[i] == "x"){
            let displayNumbers = currentDisplayText.innerHTML.split("x");
            let first_number = displayNumbers[0];
            let second_number = displayNumbers[1];
            if(!first_number || !second_number){
                currentDisplayText.innerHTML = "Error";
            }else{
                currentDisplayText.innerHTML = Number(first_number) * Number(second_number);
                return currentDisplayText.innerHTML;
            }
            break;
        }else if(currentDisplayText.innerHTML[i] =="÷"){
            let displayNumbers = currentDisplayText.innerHTML.split("÷");
            let first_number = displayNumbers[0];
            let second_number = displayNumbers[1];
            if(!first_number || !second_number){
                currentDisplayText.innerHTML = "Error";
            }else{
                currentDisplayText.innerHTML = Number(first_number) / Number(second_number);
                return currentDisplayText.innerHTML;
            }
            break;
        }else if(currentDisplayText.innerHTML[i] == "-"){
            let displayNumbers = currentDisplayText.innerHTML.split("-");
            let first_number = displayNumbers[0];
            let second_number = displayNumbers[1];
            if(!first_number || !second_number){
                currentDisplayText.innerHTML = "Error";
            }else{
                currentDisplayText.innerHTML = Number(first_number) - Number(second_number);
                return currentDisplayText.innerHTML;
            }
            break;
        }else if(currentDisplayText.innerHTML[i] =="!"){
            let displayNumbers = currentDisplayText.innerHTML.split("!");
            let number = displayNumbers[0];
            if(!number){
                currentDisplayText.innerHTML = "Error";
            }else{
                for(let i = Number(number) - 1; i > 0; i--){
                    number *= i;
                }
                currentDisplayText.innerHTML = number;
                return currentDisplayText.innerHTML;
            }
            break;
        }else if(currentDisplayText.innerHTML[i] == "%"){
            let displayNumbers = currentDisplayText.innerHTML.split("%");
            let number = displayNumbers[0];
            if(!number){
                currentDisplayText.innerHTML = "Error";
            }else{
                currentDisplayText.innerHTML = Number(number) / 100;
                return currentDisplayText.innerHTML;
            }
            break;
        }else if(currentDisplayText.innerHTML[i] == "s" && currentDisplayText.innerHTML[i+1] == "i" && currentDisplayText.innerHTML[i+2] == "n"){
            let displayNumbers = currentDisplayText.innerHTML.split("sin");
            let firstNumber = displayNumbers[0];
            let secondNumber = displayNumbers[1];
            if(firstNumber && secondNumber){
                currentDisplayText.innerHTML = Math.sin(secondNumber) * firstNumber;
                return currentDisplayText.innerHTML;
            }else if(!firstNumber && secondNumber){
                currentDisplayText.innerHTML = Math.sin(secondNumber);
                return currentDisplayText.innerHTML;
            }else{
                currentDisplayText.innerHTML = "Error";
            }
            break;
        }else if(currentDisplayText.innerHTML[i] == "l" && currentDisplayText.innerHTML[i+1] == "n"){
            let displayNumbers = currentDisplayText.innerHTML.split("ln");
            let firstNumber = displayNumbers[0];
            let secondNumber = displayNumbers[1];
            if(firstNumber && secondNumber){
                currentDisplayText.innerHTML = Math.log(secondNumber) * firstNumber;
                return currentDisplayText.innerHTML;
            }else if(!firstNumber && secondNumber){
                currentDisplayText.innerHTML = Math.log(secondNumber);
                return currentDisplayText.innerHTML;
            }else{
                currentDisplayText.innerHTML = "Error";
            }
            break;
        }else if(currentDisplayText.innerHTML[i] == "c" && currentDisplayText.innerHTML[i+1] == "o" && currentDisplayText.innerHTML[i+2] == "s"){
            let displayNumbers = currentDisplayText.innerHTML.split("cos");
            let firstNumber = displayNumbers[0];
            let secondNumber = displayNumbers[1];
            if(firstNumber && secondNumber){
                currentDisplayText.innerHTML = Math.cos(secondNumber) * firstNumber;
                return currentDisplayText.innerHTML;
            }else if(!firstNumber && secondNumber){
                currentDisplayText.innerHTML = Math.cos(secondNumber);
                return currentDisplayText.innerHTML;
            }else{
                currentDisplayText.innerHTML = "Error";
            }
            break;
        }else if(currentDisplayText.innerHTML[i] == "l" && currentDisplayText.innerHTML[i+1] == "o" && currentDisplayText.innerHTML[i+2] == "g"){
            let displayNumbers = currentDisplayText.innerHTML.split("log");
            let firstNumber = displayNumbers[0];
            let secondNumber = displayNumbers[1];
            if(firstNumber && secondNumber){
                currentDisplayText.innerHTML = (Math.log(secondNumber)/Math.log(10)) * firstNumber;
                return currentDisplayText.innerHTML;
            }else if(!firstNumber && secondNumber){
                currentDisplayText.innerHTML = Math.log(secondNumber)/Math.log(10);
                return currentDisplayText.innerHTML;
            }else{
                currentDisplayText.innerHTML = "Error";
            }
            break;
        }else if(currentDisplayText.innerHTML[i] == "t" && currentDisplayText.innerHTML[i+1] == "a" && currentDisplayText.innerHTML[i+2] == "n"){
            let displayNumbers = currentDisplayText.innerHTML.split("tan");
            let firstNumber = displayNumbers[0];
            let secondNumber = displayNumbers[1];
            if(firstNumber && secondNumber){
                currentDisplayText.innerHTML = Math.tan(secondNumber) * firstNumber;
                return currentDisplayText.innerHTML;
            }else if(!firstNumber && secondNumber){
                currentDisplayText.innerHTML = Math.tan(secondNumber);
                return currentDisplayText.innerHTML;
            }else{
                currentDisplayText.innerHTML = "Error";
            }
            break;
        }else if(currentDisplayText.innerHTML[i] == "√"){
            let displayNumbers = currentDisplayText.innerHTML.split("√");
            let firstNumber = displayNumbers[0];
            let secondNumber = displayNumbers[1];
            if(firstNumber && secondNumber){
                currentDisplayText.innerHTML = Math.sqrt(secondNumber) * firstNumber;
                return currentDisplayText.innerHTML;
            }else if(!firstNumber && secondNumber){
                currentDisplayText.innerHTML = Math.sqrt(secondNumber);
                return currentDisplayText.innerHTML;
            }else{
                currentDisplayText.innerHTML = "Error";
            }
            break;
        }else if(currentDisplayText.innerHTML[i] == "E" && currentDisplayText.innerHTML[i+1] == "X" && currentDisplayText.innerHTML[i+2] == "P"){
            let displayNumbers = currentDisplayText.innerHTML.split("EXP");
            let firstNumber = displayNumbers[0];
            let secondNumber = displayNumbers[1];
            if(firstNumber && secondNumber){
                currentDisplayText.innerHTML = firstNumber * Math.pow(10, secondNumber);
                return currentDisplayText.innerHTML;
            }else if(firstNumber && !secondNumber){
                currentDisplayText.innerHTML = firstNumber;
            }else{
                currentDisplayText.innerHTML = "Error";
            }
            break;
        }else if(currentDisplayText.innerHTML[i] == "^"){
            let displayNumbers = currentDisplayText.innerHTML.split("^");
            let firstNumber = displayNumbers[0];
            let secondNumber = displayNumbers[1];
            if(firstNumber && secondNumber){
                currentDisplayText.innerHTML = Math.pow(firstNumber, secondNumber);
                return currentDisplayText.innerHTML;
            }else{
                currentDisplayText.innerHTML = "Error";
            }
            break;
        }
    }
}

let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearDisplay);

function clearDisplay(){
    //if(lastOperation === "=" || lastOperation === "" || lastOperation === "AC"){
        numberOfOps = 0;
        lastOperation = "AC"
        displayText.innerHTML = "";
    //}else{
        //displayText.innerHTML = displayText.innerHTML.slice(0, displayText.innerHTML.length-1);
    //}
}

