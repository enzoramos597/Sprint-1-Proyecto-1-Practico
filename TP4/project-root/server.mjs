import express from 'express';
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresde30Controller } from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

//Rutas
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresde30Controller);

//Aqui levanto el puerto 3005
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});