function ObjectIsEmpty(obj) {
  if(Object.keys(obj).length === 0) {
    return true;
  } else {
    for (const key in obj) {
      if(obj[key] === undefined) {
        return true
      }
    }
    return false;
  }
}

let result = ObjectIsEmpty({ a: 1 });
console.log(result);