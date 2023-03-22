function numInString(arr) {
  let data = arr.filter((val) => {
    if (/[0-9]/.test(val)) {
      return val;
    }
  });
  return data
}

var result = numInString(["abc", "ab10c", "a10bc", "bcd"]);
console.log(result);
