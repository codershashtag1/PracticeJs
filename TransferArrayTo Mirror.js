function ArrayToMirror(arr) {
  let len = arr.length - 2;
  for(let i = len; i >= 0; i--) {                   
      arr.push(arr[i]);
  }
  return arr
}

var result = ArrayToMirror([1, 2, 3, 4, 5, 6, 7]);
console.log(result);