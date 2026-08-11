//node iteration/for_loop.js
for (let i=0;i<=10;i++){
    const element=i;
    if (element==5){
        // console.log("5 Is Best Number")
    }
    // console.log(element);
}
for (let i=0;i<=10;i++){
    // console.log(`Outter loop ${i}`)
    for(let j=0;j<=10;j++){
//    console.log(`Inner loop value ${j} and Outer loop value ${i}`);
    }
}
let myArray=["j","a","a","t"]
for(let index=0;index<myArray.length;index++){
    const element=myArray[index];
    // console.log(element)
}
for (let i=0;i<=10;i++){
    const element=i;
    if (element==5){
        console.log("Detected 5")
        break;
    }
    console.log(`Value of index is ${i}`);
    // console.log(element);
}
for (let i=0;i<=10;i++){
    const element=i;
    if (element==5){
        console.log("Detected 5")
        continue;
    }
    console.log(`Value of index is ${i}`);
    // console.log(element);
}