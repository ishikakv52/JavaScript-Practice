// node basics3/scope_level_mini_hosting.js

//function is declared here
function one(){
    username="Ishika"

    function two(){
        website : "nexahubaai",
        console.log(username);
    }
    // console.log(website);  #non accessable
    two()
}
one()

// holding function in a variable and function is declared also 
const addtwo=function(num){
    return num+2;
}
addtwo(5)