let name = " ";
let yearOfBirth = 0;
let currentYear = 0;


let ageCalculator = function(name, yearOfBirth, currentYear) {
  let currentAge = currentYear - yearOfBirth;
  let age = ""
  age = name + " is " + currentAge + " years old."
  return age;
}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Suzie", 1983, 2015));