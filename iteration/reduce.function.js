//node iteration/reduce.function.js
const myNums=[1,2,3]
// const myTotal=myNums.reduce((acc,currval)=>{
//     console.log(`acc:${acc} and currval ${currval}`)
//     return acc+currval
// },0)// 0 is starting value of acc
const myTotal=myNums.reduce((acc,cv)=>acc+cv,0)
// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"JS course",
        price:2999
    },
    {
        itemName:"Mobile dev course",
        price:5999
    },
    {
        itemName:"Data science course",
        price:12999
    },
]
const PriceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(PriceToPay);
