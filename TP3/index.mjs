import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";

//Leer y mostrar la lista de superheroes ordenada
//esta es la primera
//const superheroes = leerSuperheroes('./superheroes.txt');
const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

// Agregar nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

//Leer y mostrar la lista Actualizada de superheroes ordenada
const superheroes= leerSuperheroes(archivoOriginal);
console.log('Superheroes ordenados:');
console.log(superheroes);