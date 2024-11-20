const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
    let palabramax=stringList[0];
    for (let i = 1; i < stringList.length; i++) {
        let palabraActualSinEspacios = stringList[i].split(/[^a-zA-Z]/).join('');
        const palabraMaxSinEspacios = palabramax.split(/[^a-zA-Z]/).join('');
        if(palabraMaxSinEspacios.length < palabraActualSinEspacios.length){
            palabramax=stringList[i];
        }
    } 
  return palabramax
}
console.log(findLongestWord(avengers));