const errorHandler = (err, req, res, next) => {
    console.error('Erro interno: ', err.message);
    res.status(500).json({ erro: 'Erro interno no servidor.' });
};

module.exports = errorHandler;
