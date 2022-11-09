






// const spots =   [
//   ['s', 's', 's', 's', 'r', 'M'],
//   ['s', 'M', 's', 'S', 'R', 'M'],
//   ['s', 'M', 's', 'S', 'r', 'm'],
//   ['S', 'r', 's', 'm', 'r', 'M'],
//   ['S', 'r', 's', 'm', 'r', 'M'],
//   ['S', 'r', 'S', 'M', 'M', 'S']
// ];

// const vehicle = 'regular'; // regular, small, motorcycle

// const whereCanIPark = function(spots, vehicle) {
//   for (let y = 0; y < spots.length; y++) {
//     for (let x = 0; x < spots[y].length; x++) {
      
//       let spot = spots[y][x];

//       if (vehicle === 'regular') {
//         if (spot === 'R') {
//           return [x, y];
//         } 
//       } else if (vehicle === 'small') {
//           if (spot === 'R' || spot === 'S') {
//             return [x, y];
//           }
//       } else if (vehicle === 'motorcycle') {
//           if (spot === 'R' || spot === 'S' || spot === 'M') {
//             return [x, y];
//         }
//       }
//     }
//   }
//   return false;
// }


const result = whereCanIPark(spots, vehicle)

console.log(result);








// myArray = [
//   {nameI: "Samuel", course: "iOS"},
//   {nameI: "Jeremiah", course: "Web"},
//   {nameI: "Ophilia", course: "Web"},
//   {nameI: "Donald", course: "Web"}
// ]



// let x = "";

// for (let val of myArray) {
//   if (val.nameI === "Samuel"){
//     x = val;
//     let nameInd = val.nameI;
//   console.log(nameInd);
//   console.log(val);
//   }  
// }