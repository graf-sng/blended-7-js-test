function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  let delta = max - min;
          for (i = min; i<=delta; i+=1) {
          let result = i++;
          numbers.push(result);
          }
          
  // Change code above this line
  return numbers;
}
