function getComputerChoice(){
  var opcion=["Rock","Paper", "Scissors"];
  var item=Math.floor(Math.random()*opcion.length);
  return opcion[item]
}
function playRound(playerSelection, computerSelection) {
  //Conversion
  playerSelection=playerSelection.toUpperCase();
  computerSelection=computerSelection.toUpperCase();
  //Caso si son iguales
  if(playerSelection==computerSelection){
    return "Ties= "+playerSelection+"="+computerSelection;
  }
  else //caso sin NO SON IGUALES 
    {
      switch(playerSelection){
        case "ROCK":
          if(computerSelection=="SCISSORS"){
            return "You win! "+ playerSelection+ " win " + computerSelection;   
          }
          else //papel
            return "You lose! "+ computerSelection+ " beats " + playerSelection;  
          break;
        case "PAPER":
          if(computerSelection=="ROCK"){
            return "You win! "+ playerSelection+ " win " + computerSelection;   
          }
          else //Tijera
            return "You lose! "+ computerSelection+ " beats " + playerSelection;  
          break;
        case "SCISSORS":
        if(computerSelection==" PAPER "){
            return " You win! "+ playerSelection+ " win " + computerSelection;   
          }
          else //Roca
            return " You lose! "+ computerSelection+ " beats " + playerSelection;  
          break;
      }

  }
}
function game(){
var count=0;
var countBot=0
  for(i=0;i<5;i++){
    const computerSelection = getComputerChoice();
    var userSelection = prompt("Write 1-Rock 2-Paper 3-Scissors");
//Player selection
    switch (userSelection) {
      case "1":
        playerSelection = "Rock";
        break;
      case "2":
        playerSelection = "Paper";
        break;
      case "3":
        playerSelection = "SCISSORS";
        break;
      default:
        console.log("ERROR: NO OPTION SELECTED. Default selection: 'rock'");
        playerSelection = "rock";
        break;
    }
  //Game 
    var round=playRound(playerSelection, computerSelection);
    console.log(round,i);
   
      if(round.includes("You win!")){count++;}
      if(round.includes("You lose!")){countBot++}
      
  }
//i>5, Resultado
return (count>countBot)? "You win! "+ count+ " vs "+ countBot : "You lose! "+ countBot+ " vs "+ count 
}   
 
  


  //Inicio del juego
  console.log(game());