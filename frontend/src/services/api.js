import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: '${API_URL}/api',
    timeout: 10000,
    headers: {'Content-Type': 'application/json' },
});

// Injeta o token em todas as requisições autenticadas
export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = 'Bearer ${token}';
    } else {
        delete api.defalts.headers.common['Authorization'];
    }
};

// Serviços de autenticação
export const authService = {
    login: (email, senha) => 
        api.post('/auth/login', { email, senha }),

    register: (nome, email, senha ) =>
        api.post('/auth/register', {nome, email, senha}),
};

export default api;