import express from 'express';
import cors from 'cors';

import usuarioRoutes from './routes/usuario_routes.js';
import jogosRoutes from './routes/jogos_routes.js';
import playerRoutes from './routes/player_routes.js';
import rankingRoutes from './routes/ranking_routes.js';
import partidasRoutes from './routes/partidas_routes.js'; 
const app = express();

app.use(express.json());
app.use(cors());

app.use('/usuarios', usuarioRoutes);
app.use('/jogos', jogosRoutes);
app.use('/players', playerRoutes);
app.use('/ranking', rankingRoutes); 
app.use('/partidas', partidasRoutes); 

app.get('/', (req, res) => {
  res.json({ msg: "API rodando" });
});

export default app;