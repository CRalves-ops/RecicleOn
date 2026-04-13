const { pool } = require('pg');

const pool = new pool({
    connectionString: process.env.DATABASE_URL,
});

pool.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ', err.message);
    } else {
        console.log('Conectado ao PostgreSQL');
    }
});

module.exports = pool;