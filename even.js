const isEven = function (num) {
  return num % 2 === 0;
}

/*
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);
*/

//We can simplify our above code a little by learning that we don't need to set our function return values to new variables before doing something with them–we can use them directly where we need them.


console.log(isEven(10));
console.log(isEven(11));
