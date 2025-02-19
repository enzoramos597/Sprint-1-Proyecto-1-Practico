import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";

//Leer y mostrar la lista de superheroes ordenada
//esta es la primera
//const superheroes = leerSuperheroes('./superheroes.txt');
const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';
const archivoCompleto = './superheroescompleto.txt';

// Agregar nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

//Leer y mostrar la lista Actualizada de superheroes ordenada
const superheroes= leerSuperheroes(archivoCompleto);
console.log('Superheroes ordenados:');
console.log(superheroes);