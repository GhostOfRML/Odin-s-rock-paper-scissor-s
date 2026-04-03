/*1.Create a variable called "getComputerChoice" 
This function has to randomly pick 1 of 3 choices
Every 1 of these numbers has to concorde with the 
three choices
2.Make a variable called "getHumanChoice"
This variable stores the choice of te user
3.Create two variables "humanScore" and "computerScore"
This two should store the score each side gets every round
*/
let getComputerChoice= Math.floor(Math.random()*3)+1;
    if (getComputerChoice === 1){
        console.log ("Rock");
    }else if (getComputerChoice ===2){
        console.log("Paper") ;
    } else {
        console.log ("Scissors");
    }
let getHumnaChoice=prompt("What is your choice?")
let humanScore ="";
let computerScore="";

