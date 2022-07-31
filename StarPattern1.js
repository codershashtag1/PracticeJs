var i, j;
var string = "";
for(i = 0; i <= 5; i++) {
  for(j = 0; j <= i; j++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
string = "";

console.log("\n");

for(i = 1; i <= 6; i++) {
  for(j = 1; j <= i; j++) {
    string += i+" ";
  }
  string += "\n";
}
console.log(string);
