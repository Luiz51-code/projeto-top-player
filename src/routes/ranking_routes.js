import express from "express";
import * as ranking_controller from "../controllers/ranking_controller.js";

const router = express.Router();

router.get("/geral", ranking_controller.geral);
router.get("/jogo/:jogoId", ranking_controller.porJogo);

export default router;