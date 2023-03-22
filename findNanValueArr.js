let arr = [2, NaN, 8, 16, 32, NaN, 4, NaN, 78];
let index = []
for(let i = 0; i < arr.length; i++) {
  if(Number.isNaN(arr[i])) {
      index.push(i);
  }
}

console.log(index);