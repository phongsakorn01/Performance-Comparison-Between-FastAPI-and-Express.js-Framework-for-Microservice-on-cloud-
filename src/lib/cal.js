
const getMenu =(x,y) => {
let allergy = []
let noAllergy = []
let menuUser = ""
let foods = x
let inUser = y
inUser = "no"
for (let index = 0; index < foods.length; index++) {
    let food = foods[index]
    if(inUser == "yes" && food.seafood ==false){
        allergy.push(food.name)
   }if(inUser == "no" && food.seafood == true){
        noAllergy.push(food.name)
    }
    
}
    menuUser = menuUser+allergy+noAllergy
    return menuUser
}
exports.getMenu = getMenu;
