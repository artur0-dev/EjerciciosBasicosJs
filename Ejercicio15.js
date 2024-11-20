const products = [
    'Camiseta de Metallica',
    'Pantalón vaquero',
    'Gorra de beisbol',
    'Camiseta de Basket',
    'Cinturón de Orión',
    'AC/DC Camiseta']
function camisetas(products){
    let camiseta = [];
    for (let i = 0; i < products.length; i++) {
        let separado =products[i].split(' ')
        for (let o = 0; o < separado.length; o++) {
            if(separado[o]==='Camiseta'){
                camiseta.push(products[i]);
            }
        }
    }
    return camiseta
}
console.log(camisetas(products));