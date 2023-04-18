const playerOne = [];
const playerTwo = [];
let playerTurn = 1;
let filledBlocks = 0;

const gameButtons = document.querySelectorAll(".btn");
const retryBtn = document.querySelector(".retry-btn");

const tieHandler = () => {
	document.querySelector("h2").innerText = `it's tied, no one wins`;
	retryBtn.style.display = "inline-block";
};

const gameButtonsHandler = (event) => {
	filledBlocks++;
	event.target.removeEventListener("click", gameButtonsHandler);
	if (playerTurn === 1) {
		playerOne.push(Number(event.target.id));
		event.target.innerText = "X";
		winChecker(playerOne);
		playerTurn = 2;
	} else if (playerTurn === 2) {
		playerTwo.push(Number(event.target.id));
		event.target.innerText = "O";
		winChecker(playerTwo);
		playerTurn = 1;
	}
	filledBlocks === 9 ? tieHandler() : null;
};

const winHandler = (player) => {
	document.querySelector("h2").innerText = `player ${playerTurn} win`;
	gameButtons.forEach((btn) => {
		btn.removeEventListener("click", gameButtonsHandler);
	});
	retryBtn.style.display = "inline-block";
	filledBlocks = 0;
};

const winChecker = (player) => {
	if (player.indexOf(5) > -1) {
		player.indexOf(2) > -1 && player.indexOf(8) > -1 ? winHandler() : null;
		player.indexOf(4) > -1 && player.indexOf(6) > -1 ? winHandler() : null;
		player.indexOf(1) > -1 && player.indexOf(9) > -1 ? winHandler() : null;
		player.indexOf(3) > -1 && player.indexOf(7) > -1 ? winHandler() : null;
	}
	if (player.indexOf(1) > -1) {
		player.indexOf(2) > -1 && player.indexOf(3) > -1 ? winHandler() : null;
		player.indexOf(4) > -1 && player.indexOf(7) > -1 ? winHandler() : null;
	}
	if (player.indexOf(9) > -1) {
		player.indexOf(6) > -1 && player.indexOf(3) > -1 ? winHandler() : null;
		player.indexOf(8) > -1 && player.indexOf(7) > -1 ? winHandler() : null;
	}
};

const startGame = () => {
	gameButtons.forEach((btn) => {
		btn.addEventListener("click", gameButtonsHandler);
		btn.innerText = "";
		document.querySelector("h2").innerText = "";
		playerOne.length = 0;
		playerTwo.length = 0;
		filledBlocks = 0;
		retryBtn.style.display = "none";
	});
};

retryBtn.addEventListener("click", startGame);

startGame();
