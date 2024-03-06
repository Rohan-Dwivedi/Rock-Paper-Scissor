let userScore = 0;
let compScore = 0;

let choice = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userCard = document.querySelector("#user-score"); 
let compCard = document.querySelector("#comp-score");

let genCompChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

let drawGame = () => {
  msg.innerHTML = "<b>IT'S A DRAW! PLAY AGIAN</b>";
  msg.style.backgroundColor = "yellow";
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userCard.innerHTML = userScore;
    msg.innerHTML = `<b>YOU WON! your ${userChoice} beats ${compChoice}</b>`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compCard.innerHTML = compScore;
    msg.innerHTML = `<b>YOU LOSE! computer's ${compChoice} beats ${userChoice}</b>`;
    msg.style.backgroundColor = "red";
  }
};

let playGame = (userChoice) => {
  console.log(userChoice);
  const compChoice = genCompChoice();
  console.log(compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choice.forEach((cho) => {
  cho.addEventListener("click", () => {
    let userChoice = cho.getAttribute("id");
    playGame(userChoice);
  });
});
