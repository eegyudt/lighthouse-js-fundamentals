let array1 = [];
let array2 = [];

function concat (array1, array2) {
  let mergedArray = []
  mergedArray = mergedArray.concat(array1, array2);
  return mergedArray;

}  

  

  /*let i = 0;
  for (i = 0; i > array2.lenght - 1; i++) {
    array1.push(array2[i]);
  }
  return array1;


  /*
  while (i < array2.lenght - 1) {
    array1.push(array2[i]);
  }
  */




console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);