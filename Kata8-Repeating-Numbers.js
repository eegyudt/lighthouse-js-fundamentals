//Kata 8 - Repeating Numbers
let data = [];
let numbers = "";

const repeatNumbers = function(data) {
  numbers = "";
  for (let i = 0; i < data.length; i++) {  //loop over the all the arrays
    for (let j = 0; j< data[i][1]; j++) { //loop to repeat the numbers
      numbers = numbers + data[i][0];
    }
    if (data.length != 1 && i != data.length-1) {
      numbers = numbers + ','
    }
  }
  return numbers;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

//https://gist.github.com/eegyudt/d2baf1574af2ea90d3122b6b7117c6a1 