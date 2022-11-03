const whichSchool  = function (age) {
  if (age < 13) { //age is less than 13
    return "Elementary School";
  } else if (age >= 13 && age <= 18) { // age us between 13 and 18
    return "Secondary School";
  } else { //age is more than 18
    return "Lighthouse Labs";
  }
}
console.log(whichSchool(8));