//node Control_flow/one.js


// if
// const temperature=30

// if (temperature<=40){
    //     console.log("less than 40")
    
    // }
    // else{
        
        //     console.log("Temperature is greater than 50")
        // }
        
        // const balance=1000
        // if (balance<500) {
        //     console.log("less than 500")
        // }
        // else if (balance <750){
        //     console.log("less than 750")
        // }
        // else if (balance<1200){
        //     console.log("less than 1200")
        // }
        // else{
        //     console.log("less than 1500")
        // }


const UserLoggedIn=true
const debitCard=true

if (UserLoggedIn && debitCard){
    console.log("Allowed to purchase courses")
}

const loggedInFromGoogle=false
const loggedInFromEmail=true
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In")
}