//LHL Loopy Lighthouse 2.

let range = [];
let multiples = [];
let words = [];

const loopyLighthouse = function (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log("BattyBeacon");
    }
    else if (i % multiples[0] === 0){
      console.log("Batty");
    }
    else if (i % multiples[1] === 0){
      console.log("Beacon");
    }
    else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);


// for (let i = 100; i <= 200; i++){
//   if (i % 3 === 0 && i % 4 === 0){
//     console.log("LoopyLighthouse");
//   }
//   else if (i % 4 === 0){
//     console.log("Lighthouse");
//   }
//   else if (i % 3 === 0){
//     console.log("Loopy");
//   }
 
//   else {
//     console.log(i);
//   }
// }