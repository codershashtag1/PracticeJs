function arraySplice(obj, merged, method, arr) {
  let ar = obj.a.b;
  let a = arr.join();
  console.log(ar.splice(arr[0], arr[1]));
}


let result = arraySplice({ a: { b: [1, 2, 3] } }, "a.b", "splice", [1, 2]);
// console.log(result);