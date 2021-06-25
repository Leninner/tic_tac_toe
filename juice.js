//TODO: Hacer una función para crear jugadores con nombres personalizados

// player factory function
const createPlayer = (name, marker) => {
    return { name, marker };
};

// gameboard object
const gameBoard = (() => {
    // generate board array
    let board = [];
    for (i = 0; i < 9; i++) {
        board.push("");
    }

    // display square for each array item
    let squares = document.querySelector(".tablero");

    board.forEach(() => {
        const square = document.createElement("div");
        square.className = "cajasTablero";
        squares.appendChild(square);
    });

    // add event listeners on each square
    Array.from(squares.children).forEach((square, index) => {
        square.addEventListener("click", () => {
            // display active player marker
            square.classList.add(game.activePlayer.marker);
            square.setAttribute("data", game.activePlayer.marker);
            // update array value to be that of active player
            board[index] = game.activePlayer.marker;
            // remove event listener from the marked index
            square.style.pointerEvents = "none";
            // update remainingSpots
            game.remainingSpots -= 1;
            // check winner: if all 3 values within any of these conditions are ===...
            game.checkWinner();
            // check remaining spots
            if (game.winnerDeclared == false) {
                if (game.remainingSpots > 0) {
                    game.alertNextPlayer();
                    game.nextPlayer();
                } else if (game.remainingSpots == 0) {
                    game.declareTie();
                }
            }
        });
    });

    // return
    return {
        board,
    };
})();

// game object
const game = (() => {
    // declare players
    const playerOne = createPlayer("Lenin", "X"),
        playerTwo = createPlayer("Mathias", "O");

    // starting point
    let activePlayer = playerOne;
    let winnerDeclared = false;
    let remainingSpots = 9;

    // selectors
    let subtext = document.querySelector(".subtext"); // display winner/tie
    let playerName = document.querySelector(".player-name"); // purpose: alert player turn

    // condiciones de victoria
    const condicionesDeVictoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // comprobar ganador
    function checkWinner() {
        condicionesDeVictoria.forEach((item) => {
            // [0, 1, 2, 3, 4, 5, 6, 7]
            if (
                gameBoard.board[item[0]] === this.activePlayer.marker &&
                gameBoard.board[item[1]] === this.activePlayer.marker &&
                gameBoard.board[item[2]] === this.activePlayer.marker
            ) {
                subtext.innerHTML = `<b>${this.activePlayer.name} wins!</b>`;
                this.winnerDeclared = true;
            }
        });
    }

    // alert next player
    function alertNextPlayer() {
        this.activePlayer === playerOne
            ? (playerName.textContent = playerTwo.name)
            : (playerName.textContent = playerOne.name);
    }

    // next player
    function nextPlayer() {
        this.activePlayer === playerOne
            ? (this.activePlayer = playerTwo)
            : (this.activePlayer = playerOne);
        console.log("nextPlayer() function ran");
        console.log("active player: " + activePlayer.name);
    }

    // declare tie
    function declareTie() {
        subtext.innerHTML = "Juego empatado";
    }

    // return
    return {
        activePlayer,
        remainingSpots,
        checkWinner,
        alertNextPlayer,
        nextPlayer,
        declareTie,
        winnerDeclared,
    };
})();
