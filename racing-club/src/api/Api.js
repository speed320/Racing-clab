import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
});

// Добавляем токен в каждый запрос
apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) config.headers.Authorization = token;
        return config;
    },
    error => Promise.reject(error)
);

const Api = {
    auth: {
        login: creds => apiClient.post('/auth/login', creds),
        register: data => apiClient.post('/auth/register', data),
    },
    permissions: {
        me: () => apiClient.get('/permissions/me'),
    },
    users: {
        getAll: () => apiClient.get('/users'),
        getById: id => apiClient.get(`/users/${id}`),
        create: data => apiClient.post('/users', data),
        update: (id, data) => apiClient.put(`/users/${id}`, data),
        delete: id => apiClient.delete(`/users/${id}`),
    },
    employees: {
        getAll: () => apiClient.get('/employees'),
        getById: id => apiClient.get(`/employees/${id}`),
        create: data => apiClient.post('/employees', data),
        update: (id, data) => apiClient.put(`/employees/${id}`, data),
        delete: id => apiClient.delete(`/employees/${id}`),
    },
    racers: {
        getAll: () => apiClient.get('/racers'),
        getById: id => apiClient.get(`/racers/${id}`),
        create: data => apiClient.post('/racers', data),
        update: (id, data) => apiClient.put(`/racers/${id}`, data),
        delete: id => apiClient.delete(`/racers/${id}`),
    },
    teams: {
        getAll: () => apiClient.get('/teams'),
        getById: id => apiClient.get(`/teams/${id}`),
        create: data => apiClient.post('/teams', data),
        update: (id, data) => apiClient.put(`/teams/${id}`, data),
        delete: id => apiClient.delete(`/teams/${id}`),
    },
    races: {
        getAll: () => apiClient.get('/races'),
        getById: id => apiClient.get(`/races/${id}`),
        create: data => apiClient.post('/races', data),
        update: (id, data) => apiClient.put(`/races/${id}`, data),
        delete: id => apiClient.delete(`/races/${id}`),
    },
    tracks: {
        getAll: () => apiClient.get('/tracks'),
        getById: id => apiClient.get(`/tracks/${id}`),
        create: data => apiClient.post('/tracks', data),
        update: (id, data) => apiClient.put(`/tracks/${id}`, data),
        delete: id => apiClient.delete(`/tracks/${id}`),
    },
    vehicles: {
        getAll: () => apiClient.get('/vehicles'),
        getById: id => apiClient.get(`/vehicles/${id}`),
        create: data => apiClient.post('/vehicles', data),
        update: (id, data) => apiClient.put(`/vehicles/${id}`, data),
        delete: id => apiClient.delete(`/vehicles/${id}`),
    },
    ratings: {
        getAll: () => apiClient.get('/ratings'),
        getById: (racerId, raceId) => apiClient.get(`/ratings/racer/${racerId}/race/${raceId}`),
        create: data => apiClient.post('/ratings', data),
        update: (racerId, raceId, data) => apiClient.put(`/ratings/racer/${racerId}/race/${raceId}`, data),
        delete: (racerId, raceId) => apiClient.delete(`/ratings/racer/${racerId}/race/${raceId}`),
    },
};

export default Api;
