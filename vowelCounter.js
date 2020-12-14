// write a function that counts the number of vowels in a given string and returns that value
// one potential solution may use the charAt() method, but this isnt the only solution
// you may alsop find the .contains() method useful.
//another useful couple of methods could be .split and .join
const vowelCounter = function(data) {

  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    if ("aeiouAEIOU".includes(data.charAt(i))) {
      sum++;
    }
  }

  return sum;

};

console.log(vowelCounter("orange"));
// should return 3
console.log(vowelCounter("Cornerstone"));
// should return 4
console.log(vowelCounter("aeiou"));
// should return 5