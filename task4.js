// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoValues = (arr, sum) => {
  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    const total = arr[first] + arr[last];
    if (total === sum) {
      return [first, last];
    } else if (total < sum) {
      first++;
    } else {
      last--;
    }
  }

  return [];
};

console.log(
  "The array of two numbers is:", findTwoValues([1, 3, 6, 8, 11, 15], 9)
);
