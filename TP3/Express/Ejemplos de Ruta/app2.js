import express from 'express';

//Crear una instancia de Express
const app= express();

//Configurar el puerto en el que el servidor escuchará
const PORT= 3000;

//Ruta básica
//app.get('/', (req, res) => {res.send('¡Hola, mundo!')});

//Ruta Get para el home
//Solicitud: http://localhost:3000/
app.get('/', (req, res)=>{
    res.send('Página de Inicio');
});

//Ruta Get para recibir daots simples
//Solicitud: http://localhost:3000/data

app.get('/data', (req, res)=>{
    res.send('Datos Recibidos');
});

//Iniciar el servidor 
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})