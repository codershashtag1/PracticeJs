function checkPlainObject(value) {
  if (value.constructor === Object) {
    console.log("Plain Object");
  } else {
    console.log("Not a Plain Object");
  }
}

let result = checkPlainObject([{a:1}])
console.log(result)