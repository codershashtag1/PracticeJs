let arr = [1, 2, 3];
let reverseArr = [];

// for(let i = 2; i >= 0; i--) {
//   reverseArr.push(arr[i]);
// }


var arr1 = arr.reduceRight(function (previous, current) {
  console.log("Previous : " + previous);
  previous.push(current);
  console.log("Current : " + current);
  return previous;
}, []);

console.log(arr1);