/*1.Create a variable called "getComputerChoice" 
This function has to randomly pick 1 of 3 choices.Every 1 of these numbers has to concorde with the three choices Rock,Paper and Scissors
2.Make a variable called "getHumanChoice",this variable stores the choice of te user
3.Create two variables "humanScore" and "computerScore".This two should store the score each side gets every round
4.Create a function with 2 parameters called "humanChoice" and another one called "computerChoice"
5.For "humanChoice" the input should be case insensitive
6.Take these 2 choices and compare them in such way that if any of the users pick Rock and the other picks Paper the one that choices
Paper wins,if one choices Rock and the other one Scissors than Rock should win ,if one choices Paper and the other Scissors than Paper 
wins,and if they are the same than its a tie 
7.Print a meesage uasing console.log that if the usdeprint a meesage uasing console.log that if the usde
8.After these booleans are cheked the winner should get their score incremented 
*/
let handChoices=["rock","paper","scissors"];
let getComputerChoice= handChoices[Math.floor(Math.random()* handChoices.length)];
console.log(getComputerChoice);
let getHumnaChoice=prompt("What is your choice?").toLowerCase();
let humanScore = 0;
let computerScore= 0;

function playRound(humanChoice,computerChoice){
    
        if (humanChoice==="rock" && computerChoice==="paper"){
            return console.log("You lose!Paper beats rock!"),computerScore++;
        }else if(humanChoice==="paper"&&computerChoice==="scissors"){
            return console.log("You lose!Scissors beats paper!"),computerScore++;
        }else if(humanChoice==="scissors"&&computerChoice==="rock"){
            return console.log("You lose!Rock beats scissors!"),computerScore++;
        }else if(humanChoice==="paper"&&computerChoice==="rock"){
            return console.log("You win!Paper beats rock!"),humanScore++;
        }else if(humanChoice==="scissors"&&computerChoice==="paper"){
            return console.log("You win!Scissors beats paper !"),humanScore++;
        }else if(humanChoice==="rock"&&computerChoice==="scissors"){
            return console.log("You win!Rock beats scissors !"),humanScore++;
        }else {console.log("It'a me a tie!");}
        
}
const humanChoice= getHumnaChoice;
const computerChoice= getComputerChoice;

playRound (humanChoice,computerChoice);


