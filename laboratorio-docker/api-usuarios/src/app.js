const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Usuarios funcionando correctamente' });
});

app.listen(3000, () => {
  console.log('API Usuarios corriendo en el puerto 3000');
});
