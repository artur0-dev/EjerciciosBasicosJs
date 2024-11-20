const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
    let sumatodo=0;
    for (let i = 0; i < numberList.length; i++) {
        sumatodo+=numberList[i];
    }
    let promedio=parseInt(sumatodo/numberList.length);
    return promedio;
}
console.log(average(numbers));