
let num = 0;

let howManyHundreds = function (num) {
  let mod = num % 100;
  let bottles = (num - mod) / 100;
  return bottles
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);