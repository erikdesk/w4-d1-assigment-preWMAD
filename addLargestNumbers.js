// function will take in an array, and add the two biggest numbers in the array

const addLargestNumbers = function(data) {

  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] > max1) {
      max1 = data.pop(data);
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i] > max2) {
      max2 = data.pop(data);
    }
  }

  return max1 + max2;

};

console.log(addLargestNumbers([1, 10]));
// should return 11
console.log(addLargestNumbers([1, 2, 3]));
// should return 5
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
// should return 126