import React, { createContext, useState, useEffect } from 'react';
import Api from '../api/Api';

export const AuthContext = createContext({
    token: null,
    permissions: [],
    hasPermission: () => false,
    login: async () => {},
    logout: () => {},
    loading: true,
});

export const AuthProvider = ({ children }) => {
    const [token, setToken]         = useState(() => localStorage.getItem('token'));
    const [permissions, setPermissions] = useState([]);
    const [loading, setLoading]     = useState(true);

    // Проверка и загрузка прав
    useEffect(() => {
        const init = async () => {
            if (token) {
                try {
                    const resp = await Api.permissions.me();
                    setPermissions(resp.data);
                } catch {
                    logout();
                }
            }
            setLoading(false);
        };
        init();
    }, [token]);

    // Вход
    const login = async newToken => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        setLoading(true);
        try {
            const resp = await Api.permissions.me();
            setPermissions(resp.data);
        } finally {
            setLoading(false);
        }
    };

    // Выход
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setPermissions([]);
    };

    // Проверка на конкретное право
    const hasPermission = (entity, action) => {
        const p = permissions.find(x => x.entity === entity);
        return p?.actions.includes(action) ?? false;
    };

    return (
        <AuthContext.Provider value={{
            token,
            permissions,
            hasPermission,
            login,
            logout,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};
