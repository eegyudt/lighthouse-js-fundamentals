let recLength = 0;
let recHeight = 0;
let triBase = 0;
let triHeight = 0;
let cirRadius = 0;



function calculateRectangleArea(recLength, recHeight) {
  if (recLength >= 0 && recHeight >= 0) {
    let rectangleArea = recLength * recHeight;
    return rectangleArea;
  }
  
}

function calculateTriangleArea(triBase, triHeight) {
  if (triBase >= 0 && triHeight >= 0) {
    let triangleArea = triBase * triHeight / 2;
    return triangleArea;
  }
}

function calculateCircleArea(cirRadius) {
  if (cirRadius >= 0) {
    let circleArea = Math.PI * cirRadius * cirRadius;
    return circleArea;
  }
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