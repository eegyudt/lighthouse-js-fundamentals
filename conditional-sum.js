//Kata 2 - Conditional sums

const conditionalSum = function(values, condition) {
  let i = 0;
  let sum = 0;
  if (condition ==="even") {
    for (i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        sum = sum + values[i];
      }
    }
  }
  if (condition ==="odd") {
    for (i = 0; i < values.length; i++) {
      if (values[i] % 2 != 0) {
        sum = sum + values[i];
      }
    }
  }
  return sum;  
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

//https://gist.github.com/eegyudt/8065af9030feafc74beae53dfffef584