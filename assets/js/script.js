/* Dejo codigo entregado en el desafio como referencia ↓
function pintar(color = 'green') {
  ele = document.getElementById("ele1");
  ele.style.backgroundColor = "yellow";
}

ele = document.getElementById("ele1");
ele.addEventListener("click", pintar); */

function pintar(eleNew, color = "green") {
  eleNew.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele, "yellow"));

/* 
↓↓ Acá realice otra solución que me gusta más, pero quizas se salga un poco de los criterios a evaluar ↓↓

const ele = document.getElementById("ele1");

ele.addEventListener("click", function (color = "green") {
  ele.style.backgroundColor = "yellow";
}); 
*/
