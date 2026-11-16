import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.json({ message: 'La API está funcionando correctamente' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
