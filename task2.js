// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

let total = 0;
const sum = arr =>{
    for(i=0; i<arr.length ; i++){
        if (arr[i] > 0) {
          total = total + arr[i];
        }
    }
    return total;
}

console.log("The sum of all positive numbers is:", sum([2, -5, 10, -3, 7]));
