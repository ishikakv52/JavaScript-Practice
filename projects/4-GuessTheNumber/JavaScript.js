const random=parseInt(Math.random()*100+1);
const submitButton=document.querySelector('#subt')
const userInput=document.querySelector("#guessField")
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector(".lastResult")
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true
if (play){
    submit.addEventListner('click',(e)=>{
  e.preventDefault()
  const guess=parseInt(userInput.value)
  validateGuess(guess)
 })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid value')
    }
    else if(guess<1){
        alert('Please enter valid number more than 1')
    }
    else if(guess<100){
        alert('Please enter valid number below 100')
    }
}
function checGuess(guess){

}
function displayMSG(message){

}
function displayGuess(guess){

}
function endGame(){
    
}
function newGame(){

}