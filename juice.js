const players = (name, simbolo) => {
    return { name, simbolo };
};

let jugadorOne = players("Lenin", "X"),
    jugadorTwo = players("Mathias", "O");

console.log(jugadorOne);
console.log(jugadorTwo);

// NOTE: Analizar el siguiente código para imprimir en pantalla los simbolos de cada jugador

const writeToDOM = (selector, message) => {
    document.querySelector(selector).innerHTML = message;
};

return {
    makeUppercase,
    writeToDOM,
}();

Formatter.writeToDOM("#target", "Hi there");
