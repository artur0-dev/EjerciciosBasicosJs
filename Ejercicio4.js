const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[3]);
//-------------------------
aldeanos.push('Cervasio');
console.log(aldeanos)
//-------------------------
for (let i = 0; i < aldeanos.length; i++) {  
    if(aldeanos[i]==='Fibrilio'){
        aldeanos[i] = 'Bambina';
    }
}
console.log(aldeanos)
//-------------------------
console.log(aldeanos.reverse());
//-------------------------
let i = aldeanos.indexOf("Narciso");
aldeanos[i] = 'Canela';
//-------------------------
console.log(aldeanos[aldeanos.length-1])