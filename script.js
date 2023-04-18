const playerOne = [];
const playerTwo = [];
let playerTurn = 1;
const gameButtons = document.querySelectorAll(".btn");

const gameButtonsHandler = (event) => {
	console.log(playerOne);
	event.target.style.pointerEvents = "none";
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
};

const winHandler = (player) => {
	console.log("win");
	document.querySelector("h2").innerText = `player ${player} win`;
};

const winChecker = (player) => {
	if (player.indexOf(5) > -1) {
		if (player.indexOf(2) > -1) {
			if (player.indexOf(8) > -1) {
				winHandler(1);
			}
		}
		if (player.indexOf(4) > -1) {
			if (player.indexOf(6) > -1) {
				winHandler(1);
			}
		}
		if (player.indexOf(1) > -1) {
			if (player.indexOf(9) > -1) {
				winHandler(1);
			}
		}
		if (player.indexOf(3) > -1) {
			if (player.indexOf(7) > -1) {
				winHandler(1);
			}
		}
	}
	if (player.indexOf(1) > -1) {
		if (player.indexOf(2) > -1) {
			if (player.indexOf(3) > -1) {
				winHandler(1);
			}
		}
		if (player.indexOf(4) > -1) {
			if (player.indexOf(7) > -1) {
				winHandler(1);
			}
		}
	}
	if (player.indexOf(9) > -1) {
		if (player.indexOf(6) > -1) {
			if (player.indexOf(3) > -1) {
				winHandler(1);
			}
		}
		if (player.indexOf(8) > -1) {
			if (player.indexOf(7) > -1) {
				winHandler(1);
			}
		}
	}
};
gameButtons.forEach((btn) => {
	btn.addEventListener("click", gameButtonsHandler);
});
