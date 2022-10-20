const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const display = document.getElementById("display");
const equalSign = document.getElementById("equal");
const dot = document.getElementById("dot");

let num1 = null;
let num2 = null;
let result = null;
let op = "";
let isEqualPressed = false;
let isZeroDot = false;

const calculate = () => {
  //when num1 has no value, assign display value to num1
  if (num1 === null) num1 = parseFloat(display.innerHTML);
  //when num2 has no value, assign num1 value to num2
  else if (num2 === null) num2 = num1;
  //determine if equal sign is pressed
  if (!isZeroDot && isEqualPressed) num1 = result;
  

  switch (op) {
    case "+": result = num1 + num2; break;
    case "-": result = num1 - num2; break;
    case "/": result = num1 / num2; break;
    case "X": result = num1 * num2; break;
    default: break;
  }

  display.innerHTML = result;
};

display.innerHTML = 0;

// listen numbers
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (event) => {
    if (!isEqualPressed) {
      if (!op) {
        if ((num1 !== 0 && num1 !== null) || isZeroDot) {
          display.innerHTML += event.target.innerHTML;
          num1 = parseFloat(display.innerHTML);
          isZeroDot = num1 === 0;
        } else {
          display.innerHTML = event.target.innerHTML;
          num1 = parseFloat(display.innerHTML);
        }
      } else {
        if ((num2 !== 0 && num2 !== null) || isZeroDot) {
          display.innerHTML += event.target.innerHTML;
          num2 = parseFloat(display.innerHTML);
          isZeroDot = num2 === 0;
        } else if (num2 === null || num2 === 0) {
          display.innerHTML = event.target.innerHTML;
          num2 = parseFloat(display.innerHTML);
        } else if ((num1 !== 0 && num1 !== null) || isZeroDot) {
          display.innerHTML += event.target.innerHTML;
          num1 = parseFloat(display.innerHTML);
          isZeroDot = num1 === 0;
        }
      }
    } else {
      display.innerHTML = event.target.innerHTML;
      num1 = parseFloat(display.innerHTML);
      isEqualPressed = false;
    }
  });
}
// listen operator signs
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (event) => {
    if (!isEqualPressed) {
      if (num2 !== null) {
        calculate();
        op = event.target.innerHTML;
        num1 = parseFloat(display.innerHTML);
        num2 = null;
      } else {
        op = event.target.innerHTML;
      }
    } else {
      if (num1 === 0) {
        op = event.target.innerHTML;
        num1 = parseFloat(display.innerHTML);
        num2 = null;

        isEqualPressed = false;
      } else {
        op = event.target.innerHTML;
        num2 = null;

        isEqualPressed = false;
      }
    }
  });
}

// listen equal sign
equalSign.addEventListener("click", (event) => {
  calculate();
  isEqualPressed = true;
  isZeroDot = false;
});

//listen dot
dot.addEventListener("click", (event) => {
  if (!isEqualPressed) {
    if (num1 !== null && op && num2 === null && !isZeroDot) {
      display.innerHTML = "0.";
      num2 = parseFloat(display.innerHTML);
      isZeroDot = true;
    } else if (num1 === null && !op & !isZeroDot) {
      display.innerHTML = "0.";
      num1 = parseFloat(display.innerHTML);
      isZeroDot = true;
    } else if (!display.innerHTML.includes(".")) {
      isZeroDot = display.innerHTML === "0";
      display.innerHTML += event.target.innerHTML;
    }
  } else {
    display.innerHTML = "0.";
    num1 = parseFloat(display.innerHTML);
    isZeroDot = true;
    isEqualPressed = false;
  }
});
