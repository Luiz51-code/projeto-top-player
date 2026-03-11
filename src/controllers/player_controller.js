import * as db from "../config/db.js";

// LISTAR PLAYERS
export async function listar(req, res) {
    try {
        const [players] = await db.conexao.query("SELECT * FROM players");
        res.json(players);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao listar players" });
    }
}

// BUSCAR PLAYER POR ID
export async function buscarPorId(req, res) {
    try {
        const { id } = req.params;

        const [player] = await db.conexao.query(
            "SELECT * FROM players WHERE id = ?",
            [id]
        );

        res.json(player);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao buscar player" });
    }
}

// CRIAR PLAYER
export async function criar(req, res) {
    try {
        const { nickname, plataforma } = req.body;

        const [resultado] = await db.conexao.query(
            "INSERT INTO players (nickname, plataforma) VALUES (?, ?)",
            [nickname, plataforma]
        );

        res.status(201).json({
            id: resultado.insertId,
            nickname,
            plataforma
        });

    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao criar player" });
    }
}

// ATUALIZAR PLAYER
export async function atualizar(req, res) {
    try {
        const { id } = req.params;
        const { nickname, plataforma } = req.body;

        await db.conexao.query(
            "UPDATE players SET nickname = ?, plataforma = ? WHERE id = ?",
            [nickname, plataforma, id]
        );

        res.json({ id, nickname, plataforma });

    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao atualizar player" });
    }
}

// DELETAR PLAYER
export async function deletar(req, res) {
    try {
        const { id } = req.params;

        await db.conexao.query(
            "DELETE FROM players WHERE id = ?",
            [id]
        );

        res.json({ mensagem: "Player deletado com sucesso" });

    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao deletar player" });
    }
}