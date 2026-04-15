import { Router } from "express";
import * as jogosController from '../controllers/jogos_controller.js';

const router = Router();

/**
 * @swagger
 * /jogos:
 *   get:
 *     summary: Lista todos os jogos
 *     tags: [Jogos]
 *     responses:
 *       200:
 *         description: Lista de jogos
 */
router.get('/', jogosController.listar);

/**
 * @swagger
 * /jogos/{id}:
 *   get:
 *     summary: Busca um jogo por ID
 *     tags: [Jogos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jogo encontrado
 *       404:
 *         description: Jogo não encontrado
 */
router.get('/:id', jogosController.buscarPorId);

/**
 * @swagger
 * /jogos:
 *   post:
 *     summary: Cria um novo jogo
 *     tags: [Jogos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "FIFA"
 *     responses:
 *       201:
 *         description: Jogo criado com sucesso
 */
router.post('/', jogosController.criar);

/**
 * @swagger
 * /jogos/{id}:
 *   put:
 *     summary: Atualiza um jogo
 *     tags: [Jogos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "PES"
 *     responses:
 *       200:
 *         description: Jogo atualizado
 *       404:
 *         description: Jogo não encontrado
 */
router.put('/:id', jogosController.atualizar);

/**
 * @swagger
 * /jogos/{id}:
 *   delete:
 *     summary: Remove um jogo
 *     tags: [Jogos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jogo removido
 *       404:
 *         description: Jogo não encontrado
 */
router.delete('/:id', jogosController.deletar);

export default router;