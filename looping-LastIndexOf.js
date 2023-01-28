function lastIndexOf(array,num) {
  for (let i = array.length - 1; i > -1; i--) {
    if (num == array[i]) {
      return i;
    } 
  }
  return -1;
}
