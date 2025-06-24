import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/Api';
import { AuthContext } from '../auth/AuthContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await api.auth.login({ email, password });
            const token = resp.data.token;
            console.log('Login response:', resp);
            console.log('Login response.data:', resp.data);
            console.log('Login response.data.token:', resp.data.token);
            console.log("TOKEN", token)
            await login(token);
            navigate('/employees'); // или любой другой «домашний» маршрут
        } catch (e) {
            setError('Неверный логин или пароль');
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: 400 }}>
            <h2>Вход в систему</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        className="form-control"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required />
                </div>
                <div className="mb-3">
                    <label>Пароль</label>
                    <input
                        className="form-control"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                </div>
                <button className="btn btn-primary w-100" type="submit">Войти</button>
            </form>
        </div>
    );
};

export default LoginPage;
