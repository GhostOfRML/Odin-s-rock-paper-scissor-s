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
            announcement.textContent="You lose!Paper beats rock!",computerScore++;
            pointTracker.textContent = humanScore + " : " + computerScore ;
        }else if(humanChoice==="paper"&&computerChoice==="scissors"){
            announcement.textContent="You lose!Scissors beats paper!",computerScore++;
            pointTracker.textContent = humanScore + " : " + computerScore ;
        }else if(humanChoice==="scissors"&&computerChoice==="rock"){
            announcement.textContent="You lose!Rock beats scissors!",computerScore++;
            pointTracker.textContent = humanScore + " : " + computerScore ;
        }else if(humanChoice==="paper"&&computerChoice==="rock"){
            announcement.textContent="You win!Paper beats rock!",humanScore++;
            pointTracker.textContent = humanScore + " : " + computerScore ;
        }else if(humanChoice==="scissors"&&computerChoice==="paper"){
            announcement.textContent="You win!Scissors beats paper !",humanScore++;
            pointTracker.textContent = humanScore + " : " + computerScore ;
        }else if(humanChoice==="rock"&&computerChoice==="scissors"){
            announcement.textContent="You win!Rock beats scissors !",humanScore++;
            pointTracker.textContent = humanScore + " : " + computerScore ;
        }else {
            announcement.textContent="It's a me a tie"
        }
    }  
    function getComputerChoice(){
    let computerChoice= handChoices[Math.floor(Math.random()* handChoices.length)];
    console.log("Computer choice is " + computerChoice);
    computerChoiceTxt.textContent= "Computer has chosen " + computerChoice;
   
    return computerChoice;
    
    };
    
    const container = document.querySelector("#container");
    const scoreBoard = document.querySelector("#scoreBoard");

    const versus = document.createElement("h1");
    versus.textContent = "VS";

    const humanChoiceTxt =document.createElement("h3");
    humanChoiceTxt.textContent = "You have chosen ____";
    scoreBoard.appendChild(humanChoiceTxt);
    scoreBoard.appendChild(versus);

    const computerChoiceTxt = document.createElement("h3");
    computerChoiceTxt.textContent= "Computer has chosen ____";
    scoreBoard.appendChild(computerChoiceTxt)

    const pointTracker = document.createElement("h2");
    pointTracker.textContent = humanScore + " : " + computerScore ;
    scoreBoard.appendChild(pointTracker);

    const announcement=document.createElement("h2");
    scoreBoard.appendChild(announcement);

    const winner=document.createElement("h1");
    scoreBoard.appendChild(winner);

    container.addEventListener("click" , (event) =>{
        let target = event.target;

        switch(target.id){
            case "scissors":
                console.log("scissors");
                humanChoiceTxt.textContent = "You have chosen scissors";
               playRound("scissors",getComputerChoice());
            break;
        
            case "paper":
                console.log("paper");
                humanChoiceTxt.textContent = "You have chosen paper";
                 playRound("paper",getComputerChoice());
            break;

            case "rock":
                console.log("rock");
                humanChoiceTxt.textContent = "You have chosen rock";
                playRound("rock",getComputerChoice());
            break;

        }
        if (humanScore === 5) {
            humanChoiceTxt.textContent = "You have chosen ____";
            humanScore = 0;
            computerScore = 0;
            pointTracker.textContent = humanScore + " : " + computerScore ;
            computerChoiceTxt.textContent= "Computer has chosen ____";
            winner.textContent= "You got to 5 points !You win!";
        } else if (computerScore === 5) {
            humanChoiceTxt.textContent = "You have chosen ____";
            humanScore = 0;
            computerScore = 0;
            pointTracker.textContent = humanScore + " : " + computerScore ;
            computerChoiceTxt.textContent= "Computer has chosen ____";
            winner.textContent= "Computer got to 5 points !You lose!";
        }
    })




   
    
  
    

