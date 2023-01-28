function range(start, end, step) {
  const array = [];
  if (start > end || step < 0) {
    return [];
  } else {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
    return array;
  }
}
