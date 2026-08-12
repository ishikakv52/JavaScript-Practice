//node iteration/for_in.js

const myObj={
    js:'javascript',
    cpp: 'C++',
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObj) {
//    console.log(myObj[key]);
//    console.log(`${key} is shortcut for ${myObj[key]}`);
}
const programming=["js","py","cpp","rb"]
for (const key in programming) {
    console.log(key)
    // console.log(programming[key]);
    
    
}