const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};
function listado(alien){
    for (const wiki in alien) {
        console.log('La propiedad '+wiki+' tiene como valor '+alien[wiki]);  
    }
}
listado(alien);