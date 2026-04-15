import { Router } from "express";
import * as partidasController from "../controllers/partidas_controller.js";

const router = Router();

/**
 * @swagger
 * /partidas:
 *   get:
 *     summary: Lista todas as partidas
 *     tags: [Partidas]
 *     responses:
 *       200:
 *         description: Lista de partidas
 */
router.get("/", partidasController.listar);

/**
 * @swagger
 * /partidas/{id}:
 *   get:
 *     summary: Busca uma partida por ID
 *     tags: [Partidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partida encontrada
 *       404:
 *         description: Partida não encontrada
 */
router.get("/:id", partidasController.buscarPorId);

/**
 * @swagger
 * /partidas:
 *   post:
 *     summary: Cria uma nova partida
 *     tags: [Partidas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             jogo: "FIFA"
 *             player: "Guhll"
 *             pontos: 10
 *     responses:
 *       201:
 *         description: Partida criada
 */
router.post("/", partidasController.criar);

/**
 * @swagger
 * /partidas/{id}:
 *   put:
 *     summary: Atualiza uma partida
 *     tags: [Partidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partida atualizada
 */
router.put("/:id", partidasController.atualizar);

/**
 * @swagger
 * /partidas/{id}:
 *   delete:
 *     summary: Remove uma partida
 *     tags: [Partidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partida removida
 */
router.delete("/:id", partidasController.deletar);

export default router;