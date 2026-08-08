// node basics2/objects2.js

const regularUser={
    email: "rathi@gmail.com",
    fullname:{
       userfullname:{ firstname: "Ishika",
        lastname: "Rathi"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)
const obj1={1:"a", 2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2
// const obj3=Object.assign(obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3)

console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))
console.log(obje)