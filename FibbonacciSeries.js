function fibSeq(n) {
  let a = 0;
  let b = 1;
  let temp;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(a);
    temp = a + b;
    a = b;
    b = temp;
  }
  return arr;

}

var result = fibSeq(7);
console.log(result);
