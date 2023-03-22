let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

if(JSON.stringify(arr1) == JSON.stringify(arr2)) {
  console.log("True");
} else {
  console.log("False");
}

if(arr1.join() == arr2.join()) {
  console.log("True");
} else {
  console.log("False");
}