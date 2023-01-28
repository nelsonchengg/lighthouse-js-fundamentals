function concat(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    let element = array2[i];
    array1.push(element);
  }
  return array1;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
