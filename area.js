
let rectangleLength = 0;
let rectangleWidth = 0;
let triangleBase = 0;
let triangleHeight = 0;
let circleRadius = 0;


let calculateRectangleArea = function(length, width) {
  let rectangleArea = rectangleLength * rectangleWidth;
  return rectangleArea;
}

let calculateTriangleArea = function (base, height) {
  let triangleArea = (triangleBase * triangleHeight)/2;
  return triangleArea;
}

let calculateCircleArea = function (radius) {
  let circleArea = Math.PI * circleRadius * circleRadius;
  return circleArea;
}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined


/*
rectangle: length × width
triangle: base × height / 2
circle: π × radius2
*/

//If any of the parameters are negative, the function should return undefined.

