// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (firstNumber, operator, secondNumber) => {
  if (operator === "+") {
    return firstNumber + secondNumber;
  } else if (operator === "-") {
    return firstNumber - secondNumber;
  } else if (operator === "*") {
    return firstNumber * secondNumber;
  } else if (operator === "/") {
    if (secondNumber === 0) {
      return "Divide by 0 is not possible";
    }
    return firstNumber / secondNumber;
  } else {
    return "Invalid operator";
  }
}

console.log("The result is:", calculator(10, "-", 4));
