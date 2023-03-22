// let a = { a: 1, b: 1 };
// let b = { a: 1, b: 2 };

let a = { a: 1, b: { c: 1 } };
let b = { a: 1, b: { c: 2 } };

if(JSON.stringify(a) === JSON.stringify(b)) {
  console.log("True");
} else {
  console.log("False");
}