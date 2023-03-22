function objectWithoutProp(obj, key) {
  delete obj[key];
  return obj;
}

let result = objectWithoutProp({ a: 1, b: 2 }, "a");
console.log(result);