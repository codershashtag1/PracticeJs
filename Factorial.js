let n = 5;
let answer = 1;
if (n == 0 || n == 1) {
  answer;
} else {
  for (var i = n; i >= 1; i--) {
    console.log(answer+ " * "+ i);
    answer = answer * i;
  }
} 
console.log(answer);