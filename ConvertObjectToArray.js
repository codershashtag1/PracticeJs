function toArray(arr) {
  const data = Object.entries(arr);
  return data;
}

var result = toArray({ shrimp: 15, tots: 12 });
console.log(result);