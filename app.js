// Ejercicio 1: Variables y Tipos
let nombre = "Ana";
let edad = 25;
console.log(nombre);
console.log(edad);

// Ejercicio 2: console.log()
nombre = "Ana";
edad = 25;
console.log("Hola, soy " + nombre + " y tengo " + edad + " años.");

// Ejercicio 3: Operadores
let a = 10;
let b = 4;
console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);

// Ejercicio 4: Condicionales
let numero = 7;
if (numero % 2 === 0) {
  console.log(numero + " es par");
} else {
  console.log(numero + " es impar");
}

// Ejercicio 5: Bucles
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Ejercicio 6: Arrays
let frutas = ["manzana", "banana", "pera", "naranja", "uva"];
console.log(frutas[2]); // "pera"

// Ejercicio 7: Bucles con arrays
frutas = ["manzana", "banana", "pera", "naranja", "uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Ejercicio 8: Funciones
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}
console.log(saludar("Ana"));

// Ejercicio 9: Arrays de objetos
let personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "María", edad: 22 }
];

let menor = personas[0];
for (let i = 1; i < personas.length; i++) {
  if (personas[i].edad < menor.edad) {
    menor = personas[i];
  }
}
console.log("La persona más joven es " + menor.nombre);

// Ejercicio 10: DOM y eventos
const boton = document.getElementById("mostrarMensaje");
const mensaje = document.getElementById("mensajeOculto");

boton.addEventListener("click", () => {
  mensaje.style.display = "block";
  boton.disabled = true; // desactiva el botón después del clic
  boton.style.backgroundColor = "#ccc";
  boton.style.cursor = "not-allowed";
});
