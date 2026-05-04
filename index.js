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
8.After these choices are cheked the winner should get their score incremented 
9.Add from 5-8 should be added inside another function called "playGame" and it should repeat 5 times
*/

let humanScore = 0;
let computerScore= 0;
let handChoices=["rock","paper","scissors"];

function playRound(humanChoice,computerChoice){  
        if (humanChoice==="rock" && computerChoice==="paper"){
            console.log("You lose!Paper beats rock!"),computerScore++;
        }else if(humanChoice==="paper"&&computerChoice==="scissors"){
            console.log("You lose!Scissors beats paper!"),computerScore++;
        }else if(humanChoice==="scissors"&&computerChoice==="rock"){
            console.log("You lose!Rock beats scissors!"),computerScore++;
        }else if(humanChoice==="paper"&&computerChoice==="rock"){
            console.log("You win!Paper beats rock!"),humanScore++;
        }else if(humanChoice==="scissors"&&computerChoice==="paper"){
            console.log("You win!Scissors beats paper !"),humanScore++;
        }else if(humanChoice==="rock"&&computerChoice==="scissors"){
            console.log("You win!Rock beats scissors !"),humanScore++;
        }else {
            console.log("It's a me a tie")
        }
    }  
    function getComputerChoice(){
    let computerChoice= handChoices[Math.floor(Math.random()* handChoices.length)];
    console.log("Computer choice is " + computerChoice);
    return computerChoice;
    
    };
    
    const container = document.querySelector("#container");
    const scoreBoard = document.querySelector("#scoreBoard")
    const versus = document.createElement("h1")
    versus.textContent("You chose")
    container.addEventListener("click" , (event) =>{
        let target = event.target;

        switch(target.id){
            case "scissors":
                scoreBoard.removeChild("versus")
                console.log("scissors")
                playRound("scissors",getComputerChoice())
            break;
        
            case "paper":
                console.log("paper")
                 playRound("paper",getComputerChoice())
            break;

            case "rock":
                console.log("rock")
                 playRound("rock",getComputerChoice())
            break;

        }
    })



   
    
  
    

