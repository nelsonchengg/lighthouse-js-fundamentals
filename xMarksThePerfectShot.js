const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);

function finalPosition(moves) {
  let x = 0
  let y = 0
  for (let i = 0; i < moves.length; i++) {
    const direction = moves[i]
    if (direction == 'north') {
      y = y + 1
    } else if (direction == 'south') {
      y = y - 1
    } else if (direction == 'east') {
      x = x + 1
    } else if (direction == 'west') {
      x = x - 1
    }
  }
  return [x,y];
}
console.log(finalPosition(moves));
