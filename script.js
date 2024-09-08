// Obteniendo los elementos HTML.

let inputbox = document.querySelector(".input-box")
let listButtons = document.querySelectorAll(".btn")
let acumulate = document.querySelector(".acumulate")
let operation = ""
// Creacion de constantes a utilizar.

const OPERATIONS = {
    divition : "/",
    multiply: "*",
    addition: "+",
    sustration: "-",
    module: "%"
}

const SPECIAL_BUTTONS = {
    clear: "clear",
    del: "del",
    equal: "equal"
}

function addition(num1,num2){
    return parseInt(num1) + parseInt(num2)
}

function sustration(num1,num2){
    return parseInt(num1) - parseInt(num2)
}

function multiply(num1,num2){
    return parseInt(num1) * parseInt(num2)
}
function divition(num1,num2){
    return parseInt(num1) / parseInt(num2)
}
function modulo(num1,num2){
    return parseInt(num1) % parseInt(num2)
}


function addElements(buttonValue){
    if (inputbox.textContent.length == 11){
        return
    }else{
        if(buttonValue == SPECIAL_BUTTONS.clear){
            inputbox.textContent = ""
            acumulate.textContent = ""
        }else if(buttonValue == SPECIAL_BUTTONS.del){
            contentInput = inputbox.textContent.split('')
            contentInput.pop()
            strContentInput = contentInput.join("")
            inputbox.textContent = strContentInput
        }else if(buttonValue == OPERATIONS.addition){
                operation = "+"
                if(acumulate.textContent == ""){
                acumulate.textContent = inputbox.textContent 
                inputbox.textContent = ""
            }else{
                result = addition(acumulate.textContent,inputbox.textContent)
                acumulate.textContent = result
                inputbox.textContent = ""
            }   
        }else if(buttonValue == OPERATIONS.sustration){
            operation= "-"
            if(acumulate.textContent == ""){
                acumulate.textContent = inputbox.textContent 
                inputbox.textContent = ""
            }else{
                result = sustration(acumulate.textContent,inputbox.textContent)
                acumulate.textContent = result
                inputbox.textContent = ""
            }   
        }else if(buttonValue == OPERATIONS.multiply){
            operation = "*"
            if(acumulate.textContent == ""){
                acumulate.textContent = inputbox.textContent 
                inputbox.textContent = ""
            }else{
                result = multiply(acumulate.textContent,inputbox.textContent)
                acumulate.textContent = result
                inputbox.textContent = ""
            }   
        }else if(buttonValue == OPERATIONS.divition){
            operation = "/"
            if(acumulate.textContent == ""){
                acumulate.textContent = inputbox.textContent 
                inputbox.textContent = ""
            }else{
                result = divition(acumulate.textContent,inputbox.textContent)
                acumulate.textContent = result
                inputbox.textContent = ""
            }   
        }else if(buttonValue == OPERATIONS.module){
            operation = "%"
            if(acumulate.textContent == ""){
                acumulate.textContent = inputbox.textContent 
                inputbox.textContent = ""
            }else{
                result = modulo(acumulate.textContent,inputbox.textContent)
                acumulate.textContent = result
                inputbox.textContent = ""
            }   
        }  
        else if(buttonValue == SPECIAL_BUTTONS.equal){
            console.log(inputbox.textContent)
            console.log(acumulate.textContent)
            console.log(operation)
            result = calculate(acumulate.textContent,inputbox.textContent,operation)
            inputbox.textContent = result
            acumulate.textContent = ""
        }else{
            inputbox.textContent += buttonValue
        }
    }
}

function calculate(num1,num2,operation){
    if (operation == "+"){
        return addition(num1,num2)
    }else if(operation == "-"){
        return sustration(num1,num2)
    }else if(operation == "*"){
        return multiply(num1,num2)
    }else if(operation == "/"){
        return  divition(num1,num2)
    }else if(operation == "%"){
        return modulo(num1,num2)
    }
}


listButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        buttonValue = button.value
        addElements(buttonValue)


    })
})

