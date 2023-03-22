let arr = [1, 2, 3, 1, 2];

const non_repeating = arr.filter((num) =>
  arr.indexOf(num) === arr.lastIndexOf(num)
);

console.log(non_repeating);