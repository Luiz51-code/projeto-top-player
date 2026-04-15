import { Router } from 'express';
import rankingsController from '../controllers/rankingsController.js';
 
const router = Router();
 
/**
 * @swagger
 * /rankings/geral:
 *   get:
 *     summary: Retorna o ranking geral de players
 *     tags: [Rankings]
 *     responses:
 *       200:
 *         description: Ranking geral
 */
router.get('/geral', rankingsController.getRankingGeral);
 
/**
 * @swagger
 * /rankings/por-jogo:
 *   get:
 *     summary: Retorna ranking por jogo via query
 *     tags: [Rankings]
 *     parameters:
 *       - in: query
 *         name: jogo
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ranking filtrado por jogo
 */
router.get('/por-jogo', rankingsController.getRankingPorJogoQuery);
 
/**
 * @swagger
 * /rankings/jogo/{jogo_id}:
 *   get:
 *     summary: Ranking de um jogo específico
 *     tags: [Rankings]
 *     parameters:
 *       - in: path
 *         name: jogo_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ranking do jogo
 */
router.get('/jogo/:jogo_id', rankingsController.getRankingPorJogo);
 
/**
 * @swagger
 * /rankings/plataforma/{plataforma}:
 *   get:
 *     summary: Ranking por plataforma
 *     tags: [Rankings]
 *     parameters:
 *       - in: path
 *         name: plataforma
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ranking por plataforma
 */
router.get('/plataforma/:plataforma', rankingsController.getRankingPorPlataforma);
 
/**
 * @swagger
 * /rankings/jogo/{jogo_id}/player/{player_id}:
 *   get:
 *     summary: Retorna a posição de um player em um jogo
 *     tags: [Rankings]
 *     parameters:
 *       - in: path
 *         name: jogo_id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: player_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Posição do player no ranking
 */
router.get('/jogo/:jogo_id/player/:player_id', rankingsController.getPosicaoPlayer);
 
export default router;