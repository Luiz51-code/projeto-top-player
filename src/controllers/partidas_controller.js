import * as partidasModel from "../models/partidas_model.js";

export const listar = async (req, res) => {
    const [partidas] = await partidasModel.listar();
    res.json(partidas);
};

export const buscarPorId = async (req, res) => {
    const { id } = req.params;

    const [partida] = await partidasModel.buscarPorId(id);

    if (partida.length === 0) {
        return res.status(404).json({ msg: "Partida não encontrada" });
    }

    res.json(partida[0]);
};

export const criar = async (req, res) => {
    const { jogo_id, player_id, pontos } = req.body;

    const data_partida = new Date();

    const [resultado] = await partidasModel.criar(
        jogo_id,
        player_id,
        pontos,
        data_partida
    );

    res.status(201).json({
        msg: "Partida criada",
        id: resultado.insertId
    });
};

export const atualizar = async (req, res) => {
    const { id } = req.params;
    const { jogo_id, player_id, pontos } = req.body;

    await partidasModel.atualizar(id, jogo_id, player_id, pontos);

    res.json({ msg: "Atualizado com sucesso" });
};

export const deletar = async (req, res) => {
    const { id } = req.params;

    await partidasModel.deletar(id);

    res.json({ msg: "Deletado com sucesso" });
};