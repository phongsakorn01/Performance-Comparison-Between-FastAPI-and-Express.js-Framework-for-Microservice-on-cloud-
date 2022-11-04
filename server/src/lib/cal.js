
const getMenu =(x) => {
let allergy = []
let menuUser = []
let foods = x


for (let index = 0; index < foods.length; index++) {
    let food = foods[index]
    if(food.seafood ==false || food.seafood == true){
        allergy.push(food.name)
    }
}   
for (let index = 0; index < 3; index++) {
    var item = allergy[Math.floor(Math.random()*allergy.length)];
    menuUser.push(item)
   
}
    return menuUser
}



exports.getMenu = getMenu;
