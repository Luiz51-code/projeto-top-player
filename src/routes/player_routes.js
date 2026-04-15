import { Router } from "express";
import * as playerController from "../controllers/player_controller.js";

const router = Router();

/**
 * @swagger
 * /players:
 *   get:
 *     summary: Lista todos os players
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: Lista de players
 */
router.get("/", playerController.listar);

/**
 * @swagger
 * /players/{id}:
 *   get:
 *     summary: Busca um player por ID
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Player encontrado
 *       404:
 *         description: Player não encontrado
 */
router.get("/:id", playerController.buscarPorId);

/**
 * @swagger
 * /players:
 *   post:
 *     summary: Cria um novo player
 *     tags: [Players]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nickname: "Guhll"
 *     responses:
 *       201:
 *         description: Player criado com sucesso
 */
router.post("/", playerController.criar);

/**
 * @swagger
 * /players/{id}:
 *   put:
 *     summary: Atualiza um player
 *     tags: [Players]
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
 *             nickname: "NovoNome"
 *     responses:
 *       200:
 *         description: Player atualizado
 *       404:
 *         description: Player não encontrado
 */
router.put("/:id", playerController.atualizar);

/**
 * @swagger
 * /players/{id}:
 *   delete:
 *     summary: Remove um player
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Player removido
 *       404:
 *         description: Player não encontrado
 */
router.delete("/:id", playerController.deletar);

export default router;