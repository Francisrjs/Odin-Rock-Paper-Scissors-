function getComputerChoice() {
  var opcion = ["Rock", "Paper", "Scissors"];
  var item = Math.floor(Math.random() * opcion.length);
  return opcion[item];
}
function playRound(playerSelection, computerSelection) {
  //Conversion
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();
  //Caso si son iguales
  if (playerSelection == computerSelection) {
    return "Ties= " + playerSelection + "=" + computerSelection;
  } //caso sin NO SON IGUALES
  else {
    switch (playerSelection) {
      case "ROCK":
        if (computerSelection == "SCISSORS") {
          return "You win! " + playerSelection + " win " + computerSelection;
        } //papel
        else
          return "You lose! " + computerSelection + " beats " + playerSelection;
        break;
      case "PAPER":
        if (computerSelection == "ROCK") {
          return "You win! " + playerSelection + " win " + computerSelection;
        } //Tijera
        else
          return "You lose! " + computerSelection + " beats " + playerSelection;
        break;
      case "SCISSORS":
        if (computerSelection == " PAPER ") {
          return " You win! " + playerSelection + " win " + computerSelection;
        } //Roca
        else
          return (
            " You lose! " + computerSelection + " beats " + playerSelection
          );
        break;
    }
  }
}
// function game() {
//   var count = 0;
//   var countBot = 0;
//   for (i = 0; i < 5; i++) {
//     const computerSelection = getComputerChoice();
//     var userSelection = prompt("Write 1-Rock 2-Paper 3-Scissors");
//     Player selection
//     switch (userSelection) {
//       case "1":
//         playerSelection = "Rock";
//         break;
//       case "2":
//         playerSelection = "Paper";
//         break;
//       case "3":
//         playerSelection = "SCISSORS";
//         break;
//       default:
//         console.log("ERROR: NO OPTION SELECTED. Default selection: 'rock'");
//         playerSelection = "rock";
//         break;
//     }
//     Game
//     var round = playRound(playerSelection, computerSelection);
//     console.log(round, i);

//     if (round.includes("You win!")) {
//       count++;
//     }
//     if (round.includes("You lose!")) {
//       countBot++;
//     }
//   }
//   i>5, Resultado
//   return count > countBot
//     ? "You win! " + count + " vs " + countBot
//     : "You lose! " + countBot + " vs " + count;
// }

//button
const btnP = document.getElementById("play");
var btnS = document.getElementById("select");
const btnD = document.getElementById("display");
var count = 0;
var userSelection = "";
//display
btnS.addEventListener("click", () => {
  count++;
  switch (count) {
    case 1:
      playerSelection = "Rock";
      break;
    case 2:
      playerSelection = "Paper";
      break;
    case 3:
      playerSelection = "SCISSORS";
      break;
    default:
      count = 0;
      break;
  }
  btnD.textContent = playerSelection;
});

//Mostrando el resultado
const user = document.getElementById("results-user");
const pc = document.getElementById("results-pc");
const result = document.getElementById("results");
btnP.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  var round = playRound(playerSelection, computerSelection);
  user.textContent = round;
  pc.textContent = "Computer choice = " + computerSelection;

  if (round.includes("You win!")) {
    count++;
  }
  if (round.includes("You lose!")) {
    countBot++;
  }
});
