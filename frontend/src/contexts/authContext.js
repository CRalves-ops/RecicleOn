import React, {createContext, useContext, useState } from 'react';
import { authService, setAuthToken } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [usuario, serUsuario] = useState(null);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);

    const login = async (email, senha) => {
        setCarregando(true);
        setErro(null);
        try {
            const { data } = await authService.login(email, senha);
            setAuthToken(data.token);
            setUsuario(data.usuario);
            return true;

        } catch (err) {
            const msg = err.response?.data?.erro || 'Erro ao fazer login.';
            serErro(msg);

        } finally {
            setCarregando(false);
        }
    };

    const register = async (nome, email, senha) => {
        setCarregando(true);
        setErro(null);

        try {
            const { data } = await authService.register(nome, email, senha);
            setAuthToken(data.token);
            setUsuario(data.usuario);
            return true;

        } catch {
            const msg = err.response?.data?.erro || 'Erro ao criar conta.';
            setErro(msg);
            return false;

        } finally {
            setCarregando(false);
        }
    };

    const logout = () => {
        setAuthToken(null);
        setUsuario(null);
    };

    return (
        <AuthContext.Provider value={{ usuario, carregando, erro, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    );    
};

export const useAuth = () => useContext(AuthContext);
