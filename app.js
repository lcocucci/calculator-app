// enlazamos elementos HTML con variables y constantes JS
var display = document.getElementById("display");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const bMult = document.getElementById("b*");

// utilizamos la funcion 'addEventListener' para manipular el DOM
b7.addEventListener("click", () => (display.value += 7));
b8.addEventListener("click", () => (display.value += 8));
b9.addEventListener("click", () => (display.value += 9));
bMult.addEventListener("click", () => (display.value += "*"));
