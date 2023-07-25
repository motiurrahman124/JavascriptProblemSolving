// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const mostFrequent = (arr) => {
  let maxCount = 0;
  let maxFrequent = null;
  for (let value of arr) {
    let count = 0;
    for (let secondValue of arr) {
      if (value === secondValue) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      maxFrequent = value;
    }
  }
  return maxFrequent;
};

console.log(
  "The max frequent element is:", mostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5])
);
