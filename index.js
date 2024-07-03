function getComputerChoice() {
   let randomNumber = Math.random() * 3; 
   console.log(randomNumber);
      if(randomNumber<1){
    return "Rock";
   } else if (randomNumber>=1 && randomNumber<2){
    return "Paper";
   } else {
    return "Scissors";
   }
}
console.log(getComputerChoice())

function getHumanChoice() {
    let userInput = prompt(" Enter either Rock, Paper or Scissors").toLowerCase();
    console.log(userInput);
}
getHumanChoice()

