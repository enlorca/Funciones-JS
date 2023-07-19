const ele1 = document.getElementById("ele1");
const ele2 = document.getElementById("ele2");
const ele3 = document.getElementById("ele3");
const ele4 = document.getElementById("ele4");
const key = document.getElementById("key");
const key1 = document.getElementById("key1");
const texto = document.getElementById("texto");

const changeBackgroundColor = (event) => (event.target.style.backgroundColor = "black");

ele1.addEventListener("click", changeBackgroundColor);
ele2.addEventListener("click", changeBackgroundColor);
ele3.addEventListener("click", changeBackgroundColor);
ele4.addEventListener("click", changeBackgroundColor);

function changeColor(event) {
  let color = "";

  if (event.key === "a" || event.key === "A") {
    color = "pink";
  } else if (event.key === "s" || event.key === "S") {
    color = "orange";
  } else if (event.key === "d" || event.key === "D") {
    color = "skyblue";
  }

  if (color != "") {
    key.style.backgroundColor = color;
    texto.textContent = `[Se asignó el color ${color} con la tecla ${event.key}]`;
  } else {
    texto.textContent = `[La tecla ${event.key} no tiene un color asignado]`;
  }
}

function changeColor2(event) {
  let color = "";

  if (event.key === "q" || event.key === "Q") {
    color = "yellow";
  } else if (event.key === "w" || event.key === "W") {
    color = "blue";
  } else if (event.key === "e" || event.key === "E") {
    color = "brown";
  }

  if (color != "") {
    key1.style.backgroundColor = color;
    texto.textContent = `[Se asignó el color ${color} con la letra ${event.key}]`;
  }
}

document.addEventListener("keydown", (event) => changeColor(event));
document.addEventListener("keydown", (event) => changeColor2(event));

/* 
Otra posible solucion para que funcione minuscula y mayuscula es aplicar un .toLowerCase(), pero prefiero utilizar ||
 */
