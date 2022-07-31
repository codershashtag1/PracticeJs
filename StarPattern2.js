var i, j;
var string = "";
for(i = 0; i <= 5; i++) {
  for(j = 5; j <= i; j--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);