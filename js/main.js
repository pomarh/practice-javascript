/*
let usuario = prompt("Hola usuario, ingresa tu nombre:")
let edad = prompt("Hola " +usuario + ", ingresa tu edad:")

let peso = prompt("Hola " +usuario + ", ingresa tu peso:")

let altura = prompt("Hola " +usuario + ", ingresa tu altura:")

let indicaMasaCorporal = peso / (altura**2)

alert("tu indice de masa corparal es de: " + indicaMasaCorporal)

*/

let numeros = [5, 12, 8, 3, 15];
let indice = 0;
let encontrado = false;

while (indice < numeros.length && !encontrado) {
  if (numeros[indice] > 10) {
    console.log(`Primer número mayor a 10: ${numeros[indice]}`);
    encontrado = true;
  }
  indice++;
}