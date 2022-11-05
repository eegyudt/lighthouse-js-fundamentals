let array1 = [];
let array2 = [];

function merge(array1, array2) {
  let mergedArray = [];
  mergedArray = mergedArray.concat(array1, array2);
  mergedArray.sort();
  return mergedArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);