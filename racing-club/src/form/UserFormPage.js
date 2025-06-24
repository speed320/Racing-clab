import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/Api';

export default function UserFormPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [racers, setRacers] = useState([]);
    const [employees, setEmployees] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        racerId: '',
        employeeId: ''
    });

    const isEdit = Boolean(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [racersRes, employeesRes] = await Promise.all([
                    api.racers.getAll(),
                    api.employees.getAll()
                ]);
                setRacers(racersRes.data);
                setEmployees(employeesRes.data);

                if (isEdit) {
                    const userRes = await api.users.getById(id);
                    const user = userRes.data;

                    setFormData({
                        name: user.name,
                        email: user.email,
                        password: '', // Не заполняем пароль
                        role: user.role,
                        racerId: user.racer?.id?.toString() || '',
                        employeeId: user.employee?.id?.toString() || ''
                    });
                }
            } catch (err) {
                console.error('Ошибка при загрузке данных', err);
            }
        };

        fetchData();
    }, [id, isEdit]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const userPayload = {
            name: formData.name,
            email: formData.email,
            password: formData.password || undefined, // при редактировании можно не передавать
            role: formData.role,
            racerId: formData.racerId || null,
            employeeId: formData.employeeId || null
        };

        try {
            if (isEdit) {
                await api.users.update(id, userPayload);
            } else {
                await api.users.create(userPayload);
            }
            navigate('/users');
        } catch (err) {
            console.error(err);
            alert('Ошибка при сохранении');
        }
    };

    return (
        <div className="mt-4">
            <h2>{isEdit ? 'Edit User' : 'Add User'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password {isEdit && '(leave blank to keep current)'}</label>
                    <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select name="role" className="form-select" value={formData.role} onChange={handleChange} required>
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Organizer">Organizer</option>
                        <option value="Racer">Racer</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Racer (optional)</label>
                    <select name="racerId" className="form-select" value={formData.racerId} onChange={handleChange}>
                        <option value="">None</option>
                        {racers.map(r => (
                            <option key={r.id} value={r.id.toString()}>{r.fullName}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Employee (optional)</label>
                    <select name="employeeId" className="form-select" value={formData.employeeId} onChange={handleChange}>
                        <option value="">None</option>
                        {employees.map(e => (
                            <option key={e.id} value={e.id.toString()}>{e.fullName}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/users')}>Cancel</button>
            </form>
        </div>
    );
}
