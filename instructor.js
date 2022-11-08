const instructorWithLongestName = function(instructors) {
  counter = 0;
  let longest = {};
  let i = 0;
  for (i = 0; 1 < instructorWithLongestName.length; i++) {
    if (instructorWithLongestName[i][nameI].length > counter) {
      longest = {instructorWithLongestName[i]};
      counter = instructorWithLongestName[i][nameI].length;
    }
  }
  return longest;
};

console.log(instructorWithLongestName([
  {nameI: "Samuel", course: "iOS"},
  {nameI: "Jeremiah", course: "Web"},
  {nameI: "Ophilia", course: "Web"},
  {nameI: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {nameI: "Matthew", course: "Web"},
  {nameI: "David", course: "iOS"},
  {nameI: "Domascus", course: "Web"}
]));


/*

function judgeVegetable(vegetables, metric) {
  let maxMetric = 0;
  let bestGardener = ""
  let i = 0;
  for (i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] >= maxMetric) {
      maxMetric = vegetables[i][metric]
      bestGardener = vegetables[i][submitter];
    }
  }
  return bestGardener;
}

*/