let trash = "";
let bins = {
  waste: 0,
  recycling: 0,
  compost: 0
};
let addBins = {
  waste: 4,
  recycling: 3,
  compost: 5
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


/*
const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);
// expected output: "Mario"

const person2 = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(person2['lastname']);
// expected output: "Doe"



*/

/*

let t1 = 
{ 
  a:12,
  b:8,
  c:17
};

let t2 = 
{ 
  a:2,
  b:4,
  c:1
};

function sum(ob1, ob2) {
  let sum = {};

  Object.keys(ob1).forEach(key => {
    if (ob2.hasOwnProperty(key)) {
      sum[key] = ob1[key] + ob2[key]
    }  
  })
  return sum;
}

sum(t1, t2);

*/