var i, j;
var string = "";
for(i = 0; i <= 4; i++) {
  for(j = 0; j <= i; j++) {
    string += "*";
  }
  string += "\n"
}
console.log(string);