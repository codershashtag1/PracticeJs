function arrToKeyValue(arr) {
  return Object.fromEntries(arr);
}

let result = arrToKeyValue([
  ["a", 1],
  ["b", 2],
]);
console.log(result);