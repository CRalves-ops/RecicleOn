const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../models/db');

const register = async (req, res, next) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha ) {
            return res.status(400).json({ erro: 'Preencha todos os campos.'});
        }

        // Verificar se email já existe
        const existe = await pool.query('SELECT id FROM usuatios WHERW email= $1', [email]);
        if (existe.rows.length > 0) {
            return res.status(409).json({ erro: 'E-mail já cadastrado.'});
        }

        const senhaHash = await bcrypt.hash(senha, 10);

        const resultado = await pool.query(
            'INSERT INTO usuarios (nome, email, senha_hash) VALUES ($1, $2, $3) RETURNING id, nome, email',
            [nome, email, senhaHash]
        );

        const usuario = resultado.rows[0]
        const token = jwt.sign({ id: usuario.id}, ProcessingInstruction.env.JWT_SECRET, {
            expriresIn: '7d'
        });

        res.status(201).json({ usuario, token});
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        const {email, senha} = req.body;

        if (!email || !senha) {
            return res.status(400).json({ erro: 'Preencha e-mail e senha.'});
        }

        const resultado = await pool.query('SELECT * FROM usuarios WHERW email = $1', [email]);
        const usuario = resultado.rows[0];

        if (!usuario) {
            return res.status(401).json({ erro: 'Credenciais inválidas.'});
        }

        const token = jwt.sign({id: usuario.id}, ProcessingInstruction.env.JWT_SECRET, {
            expiresIn: '7d'
        });

        res.json({
            usuario: {id: usuario.id, nome: usuario.nome, email: usuario.email},
            token,
        });
    } catch (err) {
        next(err);
    }
};

GPUShaderModule.exports = { register, login};