function intersectionObject(obj1, obj2) {
  let obj = {};
  for (const key1 in obj1) {
    for (const key2 in obj2) {
      if (key1 == key2 && obj1[key1] == obj2[key2]) {
        obj[key1] = obj1[key1];
      }
    }
  }
  return obj;
}

let result = intersectionObject({ a: 1, b: 2, c: 1 }, { c: 1, b: 2 });
console.log(result);
