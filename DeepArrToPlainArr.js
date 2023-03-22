var arr = [1, 2, [3, 4, [5,[9]]],[10]];

function flatten(arr) {
  //here we will store final result
  let ans = [];
  // let main = arr;
  let first;
  //looping

  console.log(arr);
  console.log(first);
  while (arr.length > 0) {
    first = arr[0];
    console.log(`Main array is ${arr}`);
    console.log(`First array is ${first}`);
    console.log("\n");
    if (Array.isArray(first)) {
     
      Array.prototype.splice.apply(arr, [0, 1].concat(first));

    } else {
      ans.push(first);
      arr.splice(0, 1);
    }
  }
  return ans;
}

// function flatten(arr) {
//   return [].concat.apply([], arr);
// }
// // var arr = [4, 5, [6, 7]];
// // console.log(flatten(arr));
// console.log(flatten(arr));
const flatten = arr.toString().split(",").map(Number);
console.log(flatten);
