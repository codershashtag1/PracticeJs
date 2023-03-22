var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

for(let i = 0; i < arr1.length - 1; i++) {
  for(let j = 0; j < arr1.length - 1; j++) {
    if(arr1[j] > arr1[j+1]) {
      let temp = arr1[j+1];
      arr1[j + 1] = arr1[j];
      arr1[j] = temp;
    }
  }
}

console.log(arr1);