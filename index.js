let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let parentButton = document.querySelector("#parentButton");
let results = document.querySelector("#results")
let para = document.querySelector("#para");

// GETTING COMPUTER CHOICE
function getComputerChoice() {
   let randomNumber = Math.random() * 3;
 
   if (randomNumber < 1) {
     para.textContent += `Computer chose: Rock`;
     return "Rock";
   } else if (randomNumber < 2) {
    para.textContent += `Computer chose: Paper`;
     return "Paper";
   } else {
    para.textContent += `Computer chose: Scissors`;
     return "Scissors";
   }
 }
 
 // BUTTONS AND EVENT DELEGATION
  
parentButton.addEventListener("click",(e)=>{
  let target = e.target;
  if(target.id === "rock"){
    function getHumanChoice(){
     
      para.textContent += `You chose: Rock!`;
return "Rock";
    }
    
    let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}


else if(target.id === "paper"){
  function getHumanChoice(){
    para.textContent += "You chose: Paper!"
return "Paper"
  }
  let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}

else if (target.id === "scissors"){
  function getHumanChoice(){
    console.log("You chose: Scissors!")
return "Scissors"
  }
  let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}
});
  

  
    





  
 // PLAYROUND
 
 function playRound(humanChoice, computerChoice) {
   const winner =
     (humanChoice === "Paper" && computerChoice === "Rock") ||
     (humanChoice === "Scissors" && computerChoice === "Paper") ||
     (humanChoice === "Rock" && computerChoice === "Scissors")
       ? `You win! ${humanChoice} beats ${computerChoice} \n `
       : humanChoice === computerChoice
         ? "It's a tie! \n"
         : "You lose. \n";
 
   results.textContent = `${winner}`;
 
   if (winner.includes("You win")) {
    humanScore++;
    results.textContent += `You have ${humanScore} point(s)\n`;
    results.textContent += `Computer has ${computerScore} point(s)\n`;
    results.textContent += `Both have tied ${tieScore} time(s)\n`;
    results.textContent += `START NEW ROUND\n`;
} else if (winner.includes("You lose")) {
    computerScore++;
    results.textContent += `Computer has ${computerScore} point(s)\n`;
    results.textContent += `You have ${humanScore} point(s)\n`;
    results.textContent += `Both have tied ${tieScore} time(s)\n`;
    results.textContent += `START NEW ROUND\n`;
} else if (winner.includes("It's a tie!")) {
    tieScore++;
    results.textContent += `Both have tied ${tieScore} time(s)\n`;
    results.textContent += `You have ${humanScore} point(s)\n`;
    results.textContent += `Computer has ${computerScore} point(s)\n`;
    results.textContent += `START NEW ROUND\n`;
}
 }
 


 
// function playGame() {
//   //  if (roundsPlayed === 5) {
//   //    // Declare winner based on final scores
//   //    if (humanScore > computerScore) {
//   //      console.log("You won the game!");
//   //    } else if (computerScore > humanScore) {
//   //      console.log("Computer won the game!");
//   //    } else {
//   //      console.log("It's a tie overall!");
//   //    }
//   //    return; // Exit the function if all rounds are played
//   //  }
 
//   //  let humanSelection = getHumanChoice();
//   //  let computerSelection = getComputerChoice();
//   //  playRound(humanSelection, computerSelection);
 
//    // Call itself recursively for the next round

// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

// }
 
 let humanScore = 0;
 let computerScore = 0;
 let tieScore = 0;


//  playGame()
 
 
 