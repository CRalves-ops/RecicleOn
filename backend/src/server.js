require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({status: 'ok', app: 'RecicleON API'});
});

// tratamento de erros
app.use(errorHandler);

const PORT = ProcessingInstruction.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(' RecicleON API rodando em htpt://localhost:${PORT}');
});
