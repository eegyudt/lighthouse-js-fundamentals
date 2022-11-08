//Kata 4 - Instructors Names

const instructorWithLongestName = function(instructors) {
  counter = 0;
  let longest;
  let nameLength = 0;
  for (let val of instructors) {
    if (val.name.length > nameLength){
      longest = val;
      nameLength = val.name.length;
    }  
  }
  return longest;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

https://gist.github.com/eegyudt/b34ba35e7a2f73c04b4135f974ba2802