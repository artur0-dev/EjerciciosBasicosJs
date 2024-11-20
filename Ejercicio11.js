const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list) {
    let sumatodo=0;
    for (let i = 0; i < list.length; i++) {
        let esnumero=parseInt(list[i]);
        if(!isNaN(list[i])){
            sumatodo+=esnumero;
        }else{
            sumatodo+=list[i].length;
        }
        
    }
    return sumatodo;
}
console.log(averageWord(mixedElements));