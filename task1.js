// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const reversefunc = (input) => {
  let result = "";
  for (let i = input.length - 1; i >= 0; i--) {
    result = result + input.charAt(i);
  }
  return result;
};

console.log("Reversed string is:", reversefunc("reverse string"));
