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
   let userInput = prompt("Enter either Rock, Paper or Scissors").toLowerCase();
 
   if (userInput === "rock") {
     console.log("You chose: Rock");
     return "Rock";
   } else if (userInput === "paper") {
     console.log("You chose: Paper");
     return "Paper";
   } else if (userInput === "scissors") {
     console.log("You chose: Scissors");
     return "Scissors";
   } else {
     console.log("Enter a valid option");
     return getHumanChoice(); // Recursive call for invalid input (consider a loop or limit for retries)
   }
 }
 
 function playRound(humanChoice, computerChoice) {
   const winner =
     (humanChoice === "Paper" && computerChoice === "Rock") ||
     (humanChoice === "Scissors" && computerChoice === "Paper") ||
     (humanChoice === "Rock" && computerChoice === "Scissors")
       ? `You win! ${humanChoice} beats ${computerChoice}`
       : humanChoice === computerChoice
         ? "It's a tie!"
         : "You lose. ";
 
   console.log(winner);
 
   if (winner.includes("You win")) {
     humanScore++;
     console.log(`You have ${humanScore} point(s)`);
   } else if (winner.includes("You lose")) {
     computerScore++;
     console.log(`Computer has ${computerScore} point(s)`);
   }else if(winner.includes("It's a tie!")){
      tieScore++;
      console.log( `Both have tied ${tieScore} time(s)`)
   }
 }
 
 function playGame(roundsPlayed=0) {
   if (roundsPlayed >= 5) {
     // Declare winner based on final scores
     if (humanScore > computerScore) {
       console.log("You won the game!");
     } else if (computerScore > humanScore) {
       console.log("Computer won the game!");
     } else {
       console.log("It's a tie overall!");
     }
     return; // Exit the function if all rounds are played
   }
 
   let humanSelection = getHumanChoice();
   let computerSelection = getComputerChoice();
   playRound(humanSelection, computerSelection);
 
   // Call itself recursively for the next round
   playGame(++roundsPlayed);
 }
 
 let humanScore = 0;
 let computerScore = 0;
 let tieScore = 0;
 
 playGame();
 
 