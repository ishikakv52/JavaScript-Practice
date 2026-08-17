//generate a random color
const randomColor=()=>{
    const hex="0123456789ABCDEF"
    let color="#"
    for (let i=0;i<6;i++){
       color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId=null;
const startChangingColor=()=>{
    if (intervalId===null)
    {
          intervalId= setInterval(ChangeBGColor,1000)
    }
 
   function ChangeBGColor(){
     document.body.style.backgroundColor=randomColor();
   }
}
document.querySelector('#start').addEventListener
('click',startChangingColor)

const stopChangingColor=()=>{
    clearInterval(intervalId)
    intervalId=null;
}
document.querySelector('#stop').addEventListener
('click',stopChangingColor)