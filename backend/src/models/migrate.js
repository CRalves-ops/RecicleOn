require('dotenv').config();
const pool = require('./db');

const createTables = async () => {
    try {
        await pool.query('\
            CREATE TABLE IF NOT EXISTS usuarios (\
                id      SERIAL PRIMARY KEY,\
                nome    VARCHAR(100) NOT NULL,\
                email   VARCHAR(150) UNIQUE NOT NULL,\
                senha_hash  VARCHAR(255) NOT NULL,\
                pontos  INTEGER DEFAULT 0,\
                criado_em   TIMESTAMP DEFAULT NOW()\
            );\
        ');
        
        console.log('Tabela "usuarios" criada com sucesso.');
        process.exit(0);
    } catch (err) {
        console.error('Erro ao criar tabelas:', err.message);
        process.exit(1);
    }
};

createTables();
