const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

var message = "";
var finish = false;

app.use(express.json());

turn = "X";

var matriz = {
  a1: "none",
  a2: "none",
  a3: "none",
  b1: "none",
  b2: "none",
  b3: "none",
  c1: "none",
  c2: "none",
  c3: "none",
};

app.get("/matriz", function (req, res) {
  res.json({ matriz, message, finish });
});

app.post("/turn", (req, res) => {
  let cell = req.body.cell;

  turn = turn === "X" ? "O" : "X";
  matriz[cell] = turn;

  res.json(validateTurn());
});

var validateTurn = function () {
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
    message = `Terminó el turno del jugador ${turn}`;
  }
};

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
