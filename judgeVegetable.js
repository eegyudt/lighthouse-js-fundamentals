const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

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

console.log(judgeVegetable(vegetables, metric));

