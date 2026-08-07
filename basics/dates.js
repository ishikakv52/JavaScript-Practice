// node basics/dates.js
let mydate=new Date()
console.log(mydate)
console.log(mydate.toString() );
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)

let mycreatedDate=new Date(2006,0,26)
console.log(mycreatedDate.toDateString())

let mytimestamp=Date.now()
// console.log(mytimestamp);
// console.log(mycreatedDate.getTime());

const newdate=new Date()
console.log(newdate.getDay())