const placesToTravel = [
    {id: 5, name: 'Japan'},
    {id: 11, name: 'Venecia'},
    {id: 23, name: 'Murcia'},
    {id: 40, name: 'Santander'},
    {id: 44, name: 'Filipinas'},
    {id: 59, name: 'Madagascar'}]
    function eliminarIds(placesToTravel){
        for (const sitio of placesToTravel) {
            if(sitio.id!==11 && sitio.id!==40){
                console.log(sitio);
            }
        }
    }
    eliminarIds(placesToTravel);