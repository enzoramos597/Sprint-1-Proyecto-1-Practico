import express from 'express';

//Crear una instancia de Express
const app= express();

//Configurar el puerto en el que el servidor escuchará
const PORT= 3000;

//Ruta básica
app.get('/', (req, res) => {res.send('¡Hola, mundo!')});

//Ruta GET con parametro de consulta
//Solicitud: http://localhost:3000/search?q=javascript
//app.get('/search', (req, res) => {
//    const query = req.query.q;
//    res.send(`Resultado de búsqueda para: ${query}`)});

//Ruta get con multiples parametros consulta
//Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res)=>{
    const {type, minPrice, maxPrice} = req.query;
    res.send(`Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`);
});

//Iniciar el servidor 
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})