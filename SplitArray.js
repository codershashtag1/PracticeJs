// function splitArr(arr, length) {
//   console.log(arr.length);
//   let arr2 = [];
//   for(let i = 0; i < arr.length; i++) {
//     let chunk = arr.splice(0, length);
//     arr2.push(chunk);
//   }
//   return arr2;
// }

// let result = splitArr([1, 2, 3, 4, 5,6, 7, 8, 9], 2);

// console.log(result);


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
// console.log(chunk([1, 2, 3, 4, 5], 2));
// let arr1 = [1, 2, 3, 4, 5];
// console.log(Array.from(Math.ceil(arr1.length / 2)));

let arr = [1, 2, 3, 4, 5];
let size = 2;
let result = [];
for (let i = 0; i < arr.length; i += size) {
  let data = arr.slice(i, i + size);
  result.push(data);
}
console.log(result);