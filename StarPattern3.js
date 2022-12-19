var string = "";
for(let i = 0; i < 5; i++) {
  for(let j = 0; j <= i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

var string1 = "";
for (let i = 0; i < 5; i++) {
  for (let j = 4; j >= i; j--) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(string1);

var string2 = "";
for(let i = 1; i <= 5; i++) {
  for(let j = 1; j < i; j++) {
    string2 += " ";
  }
  for(let k = 5; k >= i; k--) {
    string2 += "*";
  }
  string2 += "\n";
}

console.log(string2)

var string3 = "";
for(let i = 0; i <= 5; i++) {
  for(let j = 5; j >= i; j--) {
    string3 += " ";
  }
  for(let k = 0; k <= i; k++) {
    string3 += "*";
  }
  string3 += "\n";
}
console.log(string3);

