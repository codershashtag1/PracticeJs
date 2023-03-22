function getUniqueFromArray(arr1, arr2) {
  let data = arr1.filter(e => arr2.includes(e));
  return data;
}

let result = getUniqueFromArray([1, 2, 3], [2, 3]);
console.log(result);