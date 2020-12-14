// write a function that returns the sum of all the numbers that are either 'even', or 'odd'
// if not enough numbers return "Improper Input"

const conditionalAdding = function(values, condition) {

  let sum = 0;
  if (values.length === 0) {
    return "improper input";
  }
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        sum += values[i];
      }
    }
  } else if (condition === "odd") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 1) {
        sum += values[i];
      }
    }
  }

  return sum;

};

console.log(conditionalAdding([1, 2, 3, 4, 5], "even"));
// should return 6
console.log(conditionalAdding([1, 2, 3, 4, 5], "odd"));
// should return 9
console.log(conditionalAdding([13, 88, 12, 44, 99], "even"));
// should return 144
console.log(conditionalAdding([], "odd"));
// should return "improper input"