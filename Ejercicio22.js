const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let posicionFruta = 0;
for (let i = 0; i < foodSchedule.length; i++) {
    if (foodSchedule[i].isVegan === false) {
        foodSchedule[i].name = fruits[posicionFruta]; 
        foodSchedule[i].isVegan = true;  
        posicionFruta +=1;
    }
    if(posicionFruta === fruits.length){
        posicionFruta=0;
    }
  }
console.log(foodSchedule);