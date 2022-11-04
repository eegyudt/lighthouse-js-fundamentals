let i = 0;
let lastIndex = 0;
let arrayL = [];
let valL = 0;

function lastIndexOf(arrayL, valL) {
  for (i = arrayL.length; i >= 0; i--) {
    if (valL === arrayL[i]) {
      lastIndex = i;
      break;
    }
    else {
      lastIndex = -1;
    }
  }
  return lastIndex;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);





/*
let arrayL = [];
let valueL = 0;
let i = 0;

function lastIndexOf (arrayL, valueL) {
  for (i = arrayL.length-1; i > 0; i--) {
    if ((i === 0) && (valueL != arrayL[0])) {
      i = -1;
    }
    else if (valueL === arrayL[i]) {
      return i;
    }
    else {
      i = -1;
      return i;
    }
  }
  return i;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));
*/
/*
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
*/