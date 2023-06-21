let lastOperation = "";
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
                let opValue = operation.textContent;
                displayText.innerHTML += opValue;
                lastOperation = opValue;
        })
    });
}

let factorialButton = document.getElementById("factorial");
factorialButton.addEventListener("click", function(){
    displayText.innerHTML += "!";
    lastOperation = factorialButton.innerHTML;
})

let equalsButton = document.getElementById("equals-button");
equalsButton.addEventListener("click", function(){
    lastOperation = equalsButton.innerHTML;
});

let exponentButton = document.getElementById("exponent");
exponentButton.addEventListener("click", function(){
    if(displayText.innerHTML != ""){
        displayText.innerHTML = "<sup>new_y</sup>";
    }
})

equalsButton.addEventListener("click", calculateAnswer);
function calculateAnswer(){
    let currentDisplayText = document.getElementById("screen-bottom");
    let originalEquation = currentDisplayText.innerHTML;
    let operationsCounter = 0;
    let currentCalculatedValue = 0;
    console.log(originalEquation);
    if(originalEquation.includes("x")){
        for(let i = 0; i < originalEquation.length; i++){
            if(originalEquation[i] == "x"){
                let displayNumbers = currentDisplayText;
                displayNumbers = displayNumbers.innerHTML.split("x");
                let first_number = displayNumbers[0];
                let second_number = displayNumbers[1];
                let result = Number(first_number) * Number(second_number);
                currentDisplayText.innerHTML = result;
                currentCalculatedValue = result;
                operationsCounter++;
                console.log(originalEquation);
                break;
            }
        }
    }

    if(originalEquation.includes("+")){
        for(let i = 0; i < originalEquation.length; i++){
            if(originalEquation[i] == "+" && operationsCounter == 0){
                let displayNumbers = currentDisplayText;
                displayNumbers = displayNumbers.innerHTML.split("+");
                let first_number = displayNumbers[0];
                let second_number = displayNumbers[1];
                currentDisplayText.innerHTML = Number(first_number) + Number(second_number);
                break;
            }else if(originalEquation[i] == "+" && operationsCounter != 0){
                let displayNumbers = originalEquation;
                displayNumbers = originalEquation.split("+");
                let number = Number(displayNumbers[0]);
                currentDisplayText.innerHTML = number + currentCalculatedValue;
                
            }
        }
    }
    //if(currentDisplayText.includes("x"))
    //go in order of pemdas
    //loop and find index of x
    // split by x
    // multiply two numbers
    //do for all operations except for example sqrt only get the number after sqrt symbol
    //break loop once the operation is done
    /*displayTopHalf = document.getElementById("screen-top");
    displayTopHalf.innerHTML = currentDisplayText.innerHTML;
    if(currentDisplayText.innerHTML.includes("+")){
        let displayNumbers = currentDisplayText.innerHTML.split("+");
        let first_number = displayNumbers[0];
        let second_number = displayNumbers[1];
        currentDisplayText.innerHTML = Number(first_number) + Number(second_number);
    }else if(currentDisplayText.innerHTML.includes("x")){
        let displayNumbers = currentDisplayText.innerHTML.split("x");
        let first_number = displayNumbers[0];
        let second_number = displayNumbers[1];
        currentDisplayText.innerHTML = Number(first_number) * Number(second_number);
    }else if(currentDisplayText.innerHTML.includes("÷")){
        let displayNumbers = currentDisplayText.innerHTML.split("÷");
        let first_number = displayNumbers[0];
        let second_number = displayNumbers[1];
        currentDisplayText.innerHTML = Number(first_number) / Number(second_number);
    }else if(currentDisplayText.innerHTML.includes("-")){
        let displayNumbers = currentDisplayText.innerHTML.split("-");
        let first_number = displayNumbers[0];
        let second_number = displayNumbers[1];
        currentDisplayText.innerHTML = Number(first_number) - Number(second_number);
    }else if(currentDisplayText.innerHTML.includes("!")){
        let displayNumbers = currentDisplayText.innerHTML.split("!");
        let number = displayNumbers[0];
        for(let i = Number(number) - 1; i > 0; i--){
            number *= i;
        }
        currentDisplayText.innerHTML = number;
    }*/
}



let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearDisplay);

function clearDisplay(){
    if(lastOperation === "=" || lastOperation === ""){
        displayText.innerHTML = "";
    }else{
        displayText.innerHTML = displayText.innerHTML.slice(0, displayText.innerHTML.length-1);
    }
    //displayText.innerHTML = "";
}

//function changeDisplay(id_value){
    //document.getElementById("screen").innerHTML = id_value.innerHTML;
//}