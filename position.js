const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function(moves){
  let positionX = 0;
  let positionY = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]){
    case "north":
      positionY = positionY + 1;
      break;
    case "south":
      positionY = positionY - 1;
      break;
    case "east":
      positionX = positionX + 1;
      break;
    case "west":
      positionX = positionX - 1;
      break;
    }

  }
  let currentPosition = [];
  return currentPosition = [positionX, positionY];
}

console.log(finalPosition(moves));