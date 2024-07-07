function getComputerChoice() {
   let randomNumber = Math.random() * 3; 
  
   if (randomNumber < 1) {
      console.log("Computer chose: Rock");
      return "Rock";
    } else if (randomNumber < 2) {
      console.log("Computer chose: Paper");
      return "Paper";
    } else {
      console.log("Computer chose: Scissors");
      return "Scissors";
    }
   
}


function getHumanChoice() {
    let userInput = prompt(" Enter either Rock, Paper or Scissors").toLowerCase();
    

    if(userInput === "rock"){
      console.log("You chose: Rock")
        return "Rock";
       } else if (userInput === "paper"){
         console.log("You chose: Paper");
        return "Paper";
       } else if(userInput === "scissors"){
         console.log("You chose: Scissors");
        return "Scissors";
       } else {
    console.log(" Enter a valid option");
    return getHumanChoice();
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
   const winner = (humanChoice === "Paper" && computerChoice === "Rock") ||
   (humanChoice === "Scissors" && computerChoice === "Paper") ||
   (humanChoice === "Rock" && computerChoice === "Scissors")
   ? `You win! ${humanChoice} beats ${computerChoice}`
   : (humanChoice === computerChoice)
     ? "It's a tie!"
     : "You lose. ";

console.log(winner); // Log the value of the winner variable
}


 
 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();
 
 playRound(humanSelection, computerSelection);
 
