const reinicio = document.querySelector(".reinicio");
reinicio.addEventListener("click", () => {
    window.location.reload();
});

// player factory function
const createPlayer = (name, marca) => {
    return { name, marca };
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
            // display active player marca
            square.classList.add(game.activePlayer.marca);
            square.setAttribute("data", game.activePlayer.marca);
            // update array value to be that of active player
            board[index] = game.activePlayer.marca;
            // remove event listener from the marked index
            square.style.pointerEvents = "none";
            // update remainingSpots
            game.remainingSpots -= 1;
            // check winner: if all 3 values within any of these conditions are ===...
            game.comprobarGanador();
            // check remaining spots
            if (game.declaradorDeVictoria == false) {
                if (game.remainingSpots > 0) {
                    game.alertaDeSiguienteJugador();
                    game.siguienteJugador();
                } else if (game.remainingSpots == 0) {
                    game.declararEmpate();
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
    const playerOne = createPlayer("Naranja", "bolt"),
        playerTwo = createPlayer("Amarillo", "heart");

    // starting point
    let activePlayer = playerOne;
    let declaradorDeVictoria = false;
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
    function comprobarGanador() {
        condicionesDeVictoria.forEach((item) => {
            // [0, 1, 2, 3, 4, 5, 6, 7]
            if (
                gameBoard.board[item[0]] === this.activePlayer.marca &&
                gameBoard.board[item[1]] === this.activePlayer.marca &&
                gameBoard.board[item[2]] === this.activePlayer.marca
            ) {
                subtext.textContent = `${this.activePlayer.name} ganó esta ronda! Es realmente bueno!`;
                this.declaradorDeVictoria = true;
            }
        });
    }

    // alert next player
    function alertaDeSiguienteJugador() {
        this.activePlayer === playerOne
            ? (playerName.textContent = playerTwo.name)
            : (playerName.textContent = playerOne.name);
    }

    // next player
    function siguienteJugador() {
        this.activePlayer === playerOne
            ? (this.activePlayer = playerTwo)
            : (this.activePlayer = playerOne);
    }

    // declare tie
    function declararEmpate() {
        subtext.textContent = "¡Esto es un Empate!";
    }

    // return
    return {
        activePlayer,
        remainingSpots,
        comprobarGanador,
        alertaDeSiguienteJugador,
        siguienteJugador,
        declararEmpate,
        declaradorDeVictoria,
    };
})();
