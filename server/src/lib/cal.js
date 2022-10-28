
const getMenu =(x) => {
let allergy = []
let noAllergy = []
let menuUser = ""
let foods = x


for (let index = 0; index < foods.length; index++) {
    let food = foods[index]
    if(food.seafood ==false){
        allergy.push(food.name)
   }if(food.seafood == true){
        noAllergy.push(food.name)
    }
    
}
    menuUser = menuUser+allergy+noAllergy
    return menuUser
}



exports.getMenu = getMenu;
