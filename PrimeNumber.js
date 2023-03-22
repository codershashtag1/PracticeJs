// var readline = require('readline');

// function primeNumber(number) {

//     for(let i = 0; i < number; i++) {
//       if(i == 0 || i == 1) 
//       {
//         return false
//       }
//       for(let j = 2; j < i; j++) {
//         if(i % j == 0) {
//           return false
//         }
//       }
//     }
// }




// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.question("Enter the number : ", function(answer) {
//   let result = primeNumber(answer);
//   console.log(answer);

//   rl.close();
// })

let isPrime = true;
for (let i = 2; i <= 10; i++) {
  console.log(`i is ${i}`);
  for (let j = 2; j < i - 1; j++) {
    console.log(`j is ${j}`);
    if (i % j == 0) {
      // console.log(`i is ${i} and is is ${j} - 1`)
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    // console.log(i);
  }
  isPrime = true;
}