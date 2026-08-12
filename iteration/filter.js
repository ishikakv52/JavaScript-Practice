//node iteration/filter.js
const programming=["js","py","cpp","rb"]
// const val=programming.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(val)
const myNumms=[1,2,3,4,5,6,7,8,9,10]
// const val=myNumms.filter((num)=>num>4)
//or
const val=myNumms.filter((num)=>{return num>4})
// console.log(val);
const num=[]
myNumms.forEach((element) => {
    if (element>4){
        num.push(element)
    }
    
});

// console.log(num);

const books = [
  {
    title: "The Alchemist",
    genre: "Adventure",
    publishDate: 1988,
    edition: 2005
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    publishDate: 1997,
    edition: 2017
  },
  {
    title: "The Kite Runner",
    genre: "Historical Fiction",
    publishDate: 2003,
    edition: 2013
  }
];
// let userbooks=books.filter((bk)=>bk.genre=="Adventure")
// let userbooks=books.filter((bk)=>bk.publishDate >2000)
let userbooks=books.filter((bk)=>bk.publishDate>2000 && bk.edition >2000)
console.log(userbooks);
