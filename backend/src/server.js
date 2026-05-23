require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/auth.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', router);

// Health check
app.get('/api/health', (req, res) => {
    res.json({status: 'ok', app: 'RecicleON API'});
});

// tratamento de erros
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`RecicleON API rodando em http://localhost:${PORT}`);
});
