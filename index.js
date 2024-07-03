function getComputerChoice() {
   let randomNumber = Math.random() * 3; 
   console.log(randomNumber);
      if(randomNumber<1){
    console.log("Rock")
   } else if (randomNumber>=1 && randomNumber<2){
    console.log("Paper")
   } else {
    console.log("Scissors")
   }
}
getComputerChoice()

