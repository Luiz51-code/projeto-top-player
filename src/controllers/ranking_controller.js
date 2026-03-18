import * as ranking_model from "../models/ranking_model.js";

export async function geral(req, res) {
  try {
    // pode vir limite por query: /ranking/geral?limite=10
    const { limite } = req.query;

    const ranking = await rankingModel.rankingGeral(limite);

    res.status(200).json(ranking);
  } catch (erro) {
    console.error("Erro ao buscar ranking geral:", erro);
    res.status(500).json({ erro: "Erro ao buscar ranking geral" });
  }
}

export async function porJogo(req, res) {
  try {
    // /ranking/jogo/1?limite=10
    const { jogoId } = req.params;
    const { limite } = req.query;

    const ranking = await rankingModel.rankingPorJogo(jogoId, limite);

    res.status(200).json(ranking);
  } catch (erro) {
    console.error("Erro ao buscar ranking por jogo:", erro);
    res.status(500).json({ erro: "Erro ao buscar ranking por jogo" });
  }
}