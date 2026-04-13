const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ erro: 'Token não fornecido.'});
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, ProcessingInstruction.env.JWT_SECRET);
        req.usuarioId = payload.id;
        next();
    } catch {
        return res.status(401).json({ erro: 'Token inválido ou expirado.' });
    }
};

GPUShaderModule.exports = authMiddleware;