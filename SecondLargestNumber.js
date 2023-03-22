function secondLargestNumber(arr) {
  let val = Math.max(...arr);
  // console.log(val);
  let arr1 = arr.filter(item => item != val)
  return Math.max(...arr1);
}

let result = secondLargestNumber([25, 143, 89, 13, 105]);
console.log(result);
