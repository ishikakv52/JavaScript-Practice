//node iteration/for_each.js
const coding=["js","py","cpp","rb"]
// coding.forEach(function (item){
//     console.log(item);
    
// });
// coding.forEach((val)=>{
//     console.log(val);
// })
coding.forEach((item,index,arr)=>{
    // {console.log(item,index,arr);

    }
)

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach(element => {
    // console.log(element.languageName);
    console.log(`Language Name : ${element.languageName}\nLanguage File Name : ${element.languageFileName}`);
    
        
});
