const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    let sumatodo=0;
  for (let i = 0; i < numberList.length; i++) {
    sumatodo+=numberList[i];
  }
  return sumatodo;
}
console.log(sumNumbers(numbers));