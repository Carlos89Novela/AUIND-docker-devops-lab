const express = require('express');
const app = express();

app.use(express.json());


// Endpoint de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'API Usuarios funcionando' });
});

// Listar usuarios
app.get('/api/users', (req, res) => {
  res.json([
    {
      id: 1,
      nombre: 'Usuario demo',
      correo: 'demo@correo.com'
    }
  ]);
});

app.listen(3000, () => {
  console.log('API corriendo en puerto 3000');
});

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Usuarios funcionando correctamente' });
});

app.listen(3000, () => {
  console.log('API Usuarios corriendo en el puerto 3000');
});

