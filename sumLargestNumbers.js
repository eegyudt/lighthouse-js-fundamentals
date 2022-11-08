//Kata 1 - Sum the Largest Numbers

const sumLargestNumbers = function(data) {
  // Put your solution here
  let max1 = 0;
  let max2 = 0;
  let data2 = []
  for (let i = 0; i < data.length; i++) {
    if (max1 <= data[i]) {
      data2.push(max1);
      max1 = data[i];
    }
    else
    data2.push(data[i]);
  }
  for (let j = 0; j < data2.length; j++) {
    if (max2 <= data2[j]) {
      max2 = data2[j];
    } 
  }
  let sumMax = max1 + max2;
  return sumMax;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

//https://gist.github.com/eegyudt/f33073f1fcfe47fd9f1a3ad4241ae7cf