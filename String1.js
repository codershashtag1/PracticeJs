let str = "kirankashinathnikam";
var obj = {};
var repeats = [];

for(let x = 0; x < str.length; x++) {
  var l = str.charAt(x);
  console.log(l);
}

// for (x = 0, length = str.length; x < length; x++) {
//   var l = str.charAt(x);
//   console.log(l);
//   console.log(isNaN(obj[l]));
//   console.log(obj);
//   obj[l] = isNaN(obj[l]) ? 1 : obj[l] + 1;
// }

console.log(obj);