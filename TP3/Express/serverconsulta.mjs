import express from 'express';

//Crear una instancia de Express
const app= express();

//Configurar el puerto en el que el servidor escuchará
const PORT= 3000;

//Ruta básica
app.get('/', (req, res) => {res.send('¡Hola, Actividad 2 TP3!')});

//Ruta Get para el home
//Solicitud: http://localhost:3000/
app.get('/', (req, res)=>{
    res.send('Página de Inicio');
});

//Ruta Get cib oaranetri de consulta
//Solicitud: http://localhost:3000/profile?edad=30

app.get('/profile', (req, res)=>{
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
});

//Iniciar el servidor 
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})