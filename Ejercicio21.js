const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

function listado(users){
    let mayores = [];
    let menores = [];
    for (const usuario of users) {
        if(usuario.years > 17){
            mayores.push(usuario);
        }else{
            menores.push(usuario);
        }
    }
    return {mayores, menores };
}
console.log(listado(users));