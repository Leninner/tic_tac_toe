let tablero = document.querySelector(".tablero"),
    arregloTablas = [],
    btnPlayerOne = document.querySelector("#playerOne"),
    btnPlayerTwo = document.querySelector("#playerTwo"),
    arregloVic = [];

// Casos posibles de victoria
const arregloVictorias = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Función de Fábrica para crear jugadores
const players = (name, simbolo) => {
    return { name, simbolo };
};

// Añadir el nombre de jugadores con función de fábrica
btnPlayerOne.addEventListener("click", () => {
    let jugadorOne = players(
        document.querySelector("#namePlayerOne").value,
        "X"
    );
    console.log(jugadorOne);
});

btnPlayerTwo.addEventListener("click", () => {
    let jugadorTwo = players(
        document.querySelector("#namePlayerTwo").value,
        "O"
    );
    console.log(jugadorTwo);
});

// Dibujar el tablero en la página
//TODO: Necesitamos hacer coincidir una cadena de texto en el arreglo que va marcando el jugador
for (let i = 0; i < 9; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cajasTablero");
    div.addEventListener("click", () => {
        div.textContent = "X";
        arregloVic.push(i);
        if (
            arregloVic.sort().join() === arregloVictorias[0].join() ||
            arregloVic.sort().join() === arregloVictorias[1].join() ||
            arregloVic.sort().join() === arregloVictorias[2].join() ||
            arregloVic.sort().join() === arregloVictorias[3].join() ||
            arregloVic.sort().join() === arregloVictorias[4].join() ||
            arregloVic.sort().join() === arregloVictorias[5].join() ||
            arregloVic.sort().join() === arregloVictorias[6].join() ||
            arregloVic.sort().join() === arregloVictorias[7].sort().join()
        ) {
            console.log("Win");
            arregloVic = [];
        }
    });
    tablero.appendChild(div);
    arregloTablas.push(i);
}

// NOTE: Analizar el siguiente código para imprimir en pantalla los simbolos de cada jugador

// const writeToDOM = (selector, message) => {
//     document.querySelector(selector).innerHTML = message;
// };

// return {
//     makeUppercase,
//     writeToDOM,
// }();

// Formatter.writeToDOM("#target", "Hi there");
