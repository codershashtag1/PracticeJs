let string = "";
let n = 1;
for(let i = 0; i <= 3; i++) {
  n = n + i;
  console.log(n);
  for(let j = 0; j <= i; j++) {
      string += n + j + " ";
  }
  string += "\n";
}

console.log(string);