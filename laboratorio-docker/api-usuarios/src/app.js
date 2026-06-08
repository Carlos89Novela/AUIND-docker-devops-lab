const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Usuarios funcionando' });
});

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