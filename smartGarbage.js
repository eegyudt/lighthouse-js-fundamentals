let trash = "";
let bins = {
  waste: 0,
  recycling: 0,
  compost: 0
};


function smartGarbage(trash, bin) {
  if (trash === "waste") {
    bins.waste = bin.waste + 1;
    bins.recycling = bin.recycling;
    bins.compost = bin.compost;
  }
  else if (trash === "recycling") {
    bins.waste = bin.waste;
    bins.recycling = bin.recycling + 1;
    bins.compost = bin.compost;
  }
  else if (trash === "compost") {
    bins.waste = bin.waste;
    bins.recycling = bin.recycling;
    bins.compost = bin.compost + 1;
  }  
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
