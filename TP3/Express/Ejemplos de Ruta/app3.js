import express from 'express';

//Crear una instancia de Express
const app= express();

//Configurar el puerto en el que el servidor escuchará
const PORT= 3000;

//Ruta básica
app.get('/', (req, res) => {res.send('¡Hola, mundo!')});

//Ruta GET con parametro de ruta
//Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Perfil del Usuario con ID: ${userId}`)});

//Ruta get con multiples parametros
//Solicitud: http://localhost:3000/product/electronics/456
app.get('/product/:category/:id', (req, res)=>{
    const {category, id} = req.params;
    res.send(`Categoria: ${category}, ID del producto: ${id}`);
});

//Iniciar el servidor 
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})