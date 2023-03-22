let i, j, k, l;
let string = "";
for(i = 0; i < 5; i++) {
  for(j = 5; j > i; j--) {
    console.log(`i value is ${i} and j value is ${j}`);
    string += "* ";
  }
  string += "\n";
}
for(k = 1; k < 5; k++) {
  for(l = 0; l <= k; l++) {
    string += "* "
  }
  string += "\n";
}

console.log(string);

