import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
    const { token, loading } = useContext(AuthContext);
    if (loading) return <div>Загрузка...</div>;
    return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
