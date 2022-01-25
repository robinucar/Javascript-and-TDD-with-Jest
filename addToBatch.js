const addToBatch = (arr, num) => {
  if (arr.length > 5) {
    return arr;
  }
  return arr.concat(num);
};

console.log(addToBatch([2, 3, 4], 1));
