var arr = [0, 1, false, 2, undefined, "", 3, null];
// var arr2 = [];

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i]) {
//     arr2.push(arr[i]);
//   }
// }

arr = arr.filter(Boolean);

console.log(arr);
