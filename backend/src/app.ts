import express from 'express';
import taskRoute from './routes/task.routes.js';

const app = express();

app.use(express.json());
app.use('/api/tasks', taskRoute);

app.get('/', (_req, res) => {
  res.json({ message: 'La API está funcionando correctamente' });
});

export default app;
