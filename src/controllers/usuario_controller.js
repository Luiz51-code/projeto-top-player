import * as usuarioModel from '../models/usuario_model.js';
import crypto from 'crypto';

export async function listar(req, res) {
    const usuarios = await usuarioModel.listarUsuarios();
    res.json(usuarios);
}

export async function buscarPorId(req, res) {
    const resultado = await usuarioModel.buscarUsuarios(req.params.id);
    const usuario = resultado && resultado[0];

    if (!usuario) {
        return res.status(404).json({ msg: "Usuario não encontrado" });
    }

    res.json(usuario);
}

export async function criar(req, res) {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ msg: "Nome, email e senha são obrigatórios" });
    }

    const senha_hash = crypto
        .createHash('sha256')
        .update(senha)
        .digest('hex');

    const id = await usuarioModel.criarUsuario(nome, email, senha_hash);

    return res.status(201).json({
        msg: "Usuario criado com sucesso",
        id
    });
} // ✅ FECHOU A FUNÇÃO AQUI

export async function login(req, res) {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ msg: "Email e senha são obrigatórios" });
    }

    const usuario = await usuarioModel.buscarUsuariosPorEmail(email);

    if (!usuario) {
        return res.status(404).json({ msg: "Credenciais inválidas" });
    }

    const senha_hash = crypto
        .createHash('sha256')
        .update(senha)
        .digest('hex');

    if (senha_hash !== usuario.senha_hash) {
        return res.status(401).json({ msg: "Credenciais inválidas" });
    }

    const token = crypto.randomBytes(24).toString('hex');

    return res.status(200).json({
        msg: "Login bem sucedido",
        token,
        usuario: {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }
    });
}