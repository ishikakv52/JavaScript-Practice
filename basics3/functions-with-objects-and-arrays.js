// node basics3/functions-with-objects-and-arrays.js

function CartPrice(...price1){
    return price1
}
total_price=CartPrice(200,300,400,500)
console.log(total_price)


const user={
    username:"jaat",
    id:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} , ID is ${anyObject.id}`)
}
handleObject(user)