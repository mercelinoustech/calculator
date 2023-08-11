// alert("jesus loves you")


// displays the number from 0-9 that got clicked into the input
var buttonNumbers = document.querySelectorAll(".but");
var inputField = document.querySelector(".inputt");
var operator = "";
var num1 = NaN;

for (var i=0; i< buttonNumbers.length; i++){
   buttonNumbers[i].addEventListener("click", function(){
     var buttonClicked  = this.innerHTML;
     console.log(buttonClicked)
 if (buttonClicked === "+" || buttonClicked === "-" || buttonClicked=== "/" || buttonClicked === "X" || buttonClicked === "x2"){
  operator = buttonClicked;
  num1 = parseFloat(inputField.value);
  inputField.value = "";
 }
 else if(buttonClicked === "="){
  var num2 = parseFloat(inputField.value);
  var result = calculate( num1, num2, operator);
  inputField.value = result;
  num1 = result;
  operator = "";
 }

 else{
  inputField.value += buttonClicked;
 }


     
    })
   
}



function divide(a, b) {
  if (b === 0) {
    return "undefined"
  }
  else if (a === 0){
    return a;
  }
  else{
    return a / b
  }

}

function multiply(a, b){
  return a*b;
}
function add(a, b){
  return a + b;
}

function subtract(a, b){
 return a-b;
}

function power(a,b){
  return Math.pow(a,b);
}

function calculate(a, b, operator){
  switch (operator) {
    case "+" :
     return add(a,b)
     break;

    case "-" :
      return subtract(a,b)
      break;

    case "X" :
        return multiply(a,b)
        break;

    case "/" :
          return divide(a,b)
          break;

     case "x2" :
            return power(a,b)
            break;
     default:
         return "invalid operator"
          break;
}

}


function clearInput(){
      var getValue = document.querySelector(".inputt");
        if (getValue.value !="") {
            getValue.value = "";
        }
 }
