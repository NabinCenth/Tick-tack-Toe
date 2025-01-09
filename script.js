alert("Use the inspect element for the Desktop");
let a = 0;
let buttons = document.querySelectorAll(".button");
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let board = [null, null, null, null, null, null, null, null, null];
// player turn
let turn = true;
let player;
buttons.forEach((button) => {
  button.addEventListener("click", clickCount);
});
function clickCount(e) {
  let spanElement = e.target.querySelector("span");
  if (!spanElement) return;
  if (turn) {
    player = "X";
    spanElement.style.color = "#00ffff";
    spanElement.style.textShadow =
      "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 80px #00ff00";
    spanElement.style.animation = "bounceIn 0.5s ease-in-out";
    turn = false;
  } else if (turn == false) {
    player = "O";
    spanElement.style.animation = "bounceIn 0.5s ease-in-out";
    spanElement.style.color = "#ff69b4";
    spanElement.style.textShadow =
      "0 0 5px #ffffff, 0 0 10px #ff69b4, 0 0 20px #ff69b4, 0 0 40px #ff69b4, 0 0 80px #ff69b4";
    turn = true;
  } else {
  }
  let clcId = Number(e.target.id);
  board[clcId] = player;
  spanElement.textContent = player;
  e.target.disabled = true;
  //Checks for Winner
  winningPatterns.forEach((pattern) => {
    const [a, b, c] = pattern;
    if (
      board[clcId] == board[a] &&
      board[clcId] == board[b] &&
      board[clcId] == board[c]
    ) {
      let winner = document.querySelector("h3");
      winner.classList.add("winner");
      winner.textContent = `Congratulation ${player} wins the match`;
      winner.classList.add("show");
      buttons.forEach((button) => (button.disabled = true));
    }
  });
}
let winner = document.querySelector("h3");
let button1 = document.querySelectorAll(".button");
let buttontxts = document.querySelectorAll(".text");
let reset = document.querySelector(".reset");
reset.addEventListener("click", resetf);
function resetf() {
  buttontxts.forEach((buttontxt) => {
    let spanElement = document.querySelector("span");
    if (spanElement) {
      spanElement.innerText = null;
      spanElement.style.color = null;
      spanElement.style.textShadow = null;
      spanElement.style.animation = null;
      winner.textContent = null;
    }
    buttontxt.innerText = null;
  });

  button1.forEach((button) => {
    button.disabled = false;
  });
  winner.classList.remove("winner");
  board = [null, null, null, null, null, null, null, null, null];
  player = "X";
  turn = true;
}
