/*Create a function called "getComputerChoice" 
This function has to randomly pick 1 of 3 choices
Every 1 of these choices has to concorde with the 
3 hand signs
*/
let getComputerChoice= Math.floor(Math.random()*3)+1;
    if (getComputerChoice === 1){
        return ("Rock");
    }else if (getComputerChoice ===2){
        return ("Paper");
    } else {
        return ("Scissors");
    }


