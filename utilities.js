const { finished } = require("stream");

var validateTurn = function (matriz, turn, message, finish) {
  if (matriz.a1 === turn && matriz.a2 === turn && matriz.a3 === turn) {
    message = `Ganador jugador ${turn}`;
    finish = true;
  } else if (matriz.b1 === turn && matriz.b2 === turn && matriz.b3 === turn) {
    message = `Ganador jugador ${turn}`;
    finish = true;
  } else if (matriz.c1 === turn && matriz.c2 === turn && matriz.c3 === turn) {
    message = `Ganador jugador ${turn}`;
    finish = true;
  } else if (matriz.a1 === turn && matriz.b1 === turn && matriz.c1 === turn) {
    message = `Ganador jugador ${turn}`;
    finish = true;
  } else if (matriz.a2 === turn && matriz.b2 === turn && matriz.c2 === turn) {
    message = `Ganador jugador ${turn}`;
    finish = true;
  } else if (matriz.a3 === turn && matriz.b3 === turn && matriz.c3 === turn) {
    message = `Ganador jugador ${turn}`;
    finish = true;
  } else if (matriz.a1 === turn && matriz.b2 === turn && matriz.c3 === turn) {
    message = `Ganador jugador ${turn}`;
    finish = true;
  } else if (matriz.a3 === turn && matriz.b2 === turn && matriz.c1 === turn) {
    message = `Ganador jugador ${turn}`;
    finish = true;
  } else {
    message = "Continua el siguiente jugador";
  }
  return { matriz, turn, message, finish };
};
module.exports = { validateTurn };
