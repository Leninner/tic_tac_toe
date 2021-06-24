let tablero = document.querySelector(".tablero"),
    arregloTablas = [],
    btnPlayerOne = document.querySelector("#playerOne"),
    btnPlayerTwo = document.querySelector("#playerTwo");

// Función de Fábrica
const players = (name, simbolo) => {
    return { name, simbolo };
};

// Añadir el nombre de jugadores
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

let arregloVic = [];
// Dibujar el tablero en la página
for (let i = 0; i < 9; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cajasTablero");
    div.addEventListener("click", () => {
        div.textContent = "X";
        arregloVic.push(i);
        console.log(arregloVic);
    });
    tablero.appendChild(div);
    arregloTablas.push(i);
}

// Arreglos de Victoria
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

console.log(arregloTablas);
// NOTE: Analizar el siguiente código para imprimir en pantalla los simbolos de cada jugador

// const writeToDOM = (selector, message) => {
//     document.querySelector(selector).innerHTML = message;
// };

// return {
//     makeUppercase,
//     writeToDOM,
// }();

// Formatter.writeToDOM("#target", "Hi there");
