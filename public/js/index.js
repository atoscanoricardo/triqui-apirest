var collection = document.getElementsByClassName("imgBoton");
var message = document.getElementById("message");

var cell = "";

for (let i = 0; i < collection.length; i++) {
  collection[i].addEventListener("click", function () {
    cell = collection[i].id;

    axios.post("/turn", { cell: cell }).then(function (res) {
      matriz = res.data.matriz;
      let img = document.getElementById(cell);
      img.style.pointerEvents = "none";
    });
  });
}

function paintMatriz(matriz) {
  for (m in matriz) {
    let img = document.getElementById(m);
    img.src = `/img/${matriz[m]}.png`;
  }
}

var btRefresh = document.getElementById("btRefresh");
btRefresh.addEventListener("click", refresh);

function refresh() {
  axios.get("/matriz").then(function (res) {
    paintMatriz(res.data.matriz);
    message.innerHTML = res.data.message;
    if (res.data.finish) {
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.pointerEvents = "none";
      }
    }
  });
}
setInterval(function () {
  refresh();
}, 1000);
