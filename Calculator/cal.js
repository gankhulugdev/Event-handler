const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const display = document.getElementById("display");
const equalSign = document.getElementById("equal");
const dot = document.getElementById('dot');

let num1 = null;
let num2 = null;
let op = "";
let isEqualPressed = false;
let isZeroDot = false;



const clearNumsOp = ()=>{
    num1 = null;
    num2 = null;
    op = "";
}
const calculate = () => {
  //when num2 has no value, assign num1 value to num2
  if (num2 === null) num2 = num1;

  switch (op) {
    case "+": num1 += num2; break;
    case "-": num1 -= num2; break;
    case "/": num1 /= num2; break;
    case "X": num1 *= num2; break;
    default: break;
  }

  display.innerHTML = num1;
};

display.innerHTML = 0;

// listen numbers
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (event) => {
    if (!isEqualPressed) {
      if (!op) {
        if (num1 || isZeroDot) {
          display.innerHTML += event.target.innerHTML;
          num1 = parseFloat(display.innerHTML);
          isZeroDot = (num1 === 0);

        } else {
          display.innerHTML = event.target.innerHTML;
          num1 = parseFloat(display.innerHTML);
          console.log(num1)
        }
      } else {
        if (num2 || isZeroDot) {
          display.innerHTML += event.target.innerHTML;
          num2 = parseFloat(display.innerHTML);
          isZeroDot = (num2 === 0)

        } else {
          display.innerHTML = event.target.innerHTML;
          num2 = parseFloat(display.innerHTML);

        }
      }
    } else {
      clearNumsOp();
      display.innerHTML = event.target.innerHTML;
      num1 = parseFloat(display.innerHTML);

      isEqualPressed = false;
    }
  });
}
// listen operator signs
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (event) => {
    if (!isEqualPressed && num2) {
      calculate();
      op = event.target.innerHTML;
      num2 = null;
    }else if(num1 === 0 && isZeroDot){
        
        op = event.target.innerHTML;
        isZeroDot = false;
    } else {
      op = event.target.innerHTML;
      num2 = null;
    //   isZeroDot = true;
      isEqualPressed = false;
    }
  });
}

// listen equal sign
equalSign.addEventListener("click", (event) => {
  calculate();
  isEqualPressed = true;
});

//listen dot
dot.addEventListener('click', (event)=>{
    if(!isEqualPressed){
        if(num1 && op && !num2 && !isZeroDot){
            display.innerHTML = '0.'
            isZeroDot = true;
            // num2 = parseFloat(display.innerHTML);
            
        }else if(!display.innerHTML.includes('.')){
            display.innerHTML += event.target.innerHTML;
            isZeroDot = (!num1 || !num2);
        }
    }else{
        clearNumsOp();
        display.innerHTML = '0.'
        isZeroDot = true;
        isEqualPressed = false;
    }
    
    
})