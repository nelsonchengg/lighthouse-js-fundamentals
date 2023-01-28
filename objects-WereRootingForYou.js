// function judgeVegetable(vegetables, metric) {
//   let bestVeggie = null;

//   for (let i = 0; i < vegetables.length; i++) {
//     const currentVegetable = vegetables[i];

//     // check if we have a best veggie yet
//     if (bestVeggie == null) {
//       // no best veggie, use current one as best
//       bestVeggie = currentVegetable
//     } else {
//       // we have a current best veggie, let's compare!
//       if (metric == "redness") {
    
//         currentVegetable.redness
        
//       }
//     }
//   }
// }

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
    fuckme: 3
  }
]

const metric = 'fuckme'

//Looking for greatest value of metric
//Print judgeVegetable.submitter

function judgeVegetable(vegetables, metric) {
  let bestVegetable = null;

  for (let i = 0; i < vegetables.length; i++) {
    const currentVegetable = vegetables[i];
    
    // Do we have a best veggie yet?
    if (bestVegetable === null) {
      // No, let's set it to the current one and "continue"
      bestVegetable = currentVegetable;
      continue;
    }
    
    // Ok we have a best veggie already, let's compare it with the current one
    if (bestVegetable[metric] < currentVegetable[metric]) {
      bestVegetable = currentVegetable;
    }
  }
  return bestVegetable.submitter;
}

console.log(judgeVegetable(vegetables, metric));
