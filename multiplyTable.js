function multiplyTable(n) {
  let arr = [];
  let innerArr = [];
  for(let i = 1; i <= n; i++) {
    innerArr = [];
    for(let j = 1; j <= n; j++) {
      let m = i * j;
      innerArr.push(m);
    }
    arr.push(innerArr);
  }
  return arr;
}

var result = multiplyTable(5);
console.log(result);