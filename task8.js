// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secondSmallestNumber=(arr)=>{
  if (arr.length < 2) {
    return "At least two elements need in this array";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const n of arr) {
    if (n < smallest) {
      secondSmallest = smallest;
      smallest = n;
    } else if (n < secondSmallest && n !== smallest) {
      secondSmallest = n;
    }
  }

  if (secondSmallest === Infinity) {
    return "All elements are same in the array.";
  }

  return secondSmallest;
}

console.log(
  "The second smallest number is:",
  secondSmallestNumber([5, 3, 7, 1, 8, 2])
);
