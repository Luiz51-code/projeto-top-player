import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuario_routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
    res.json({ msg: "API rodando" });
});

export default app;