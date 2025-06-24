import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/Api';

export default function EmployeeFormPage() {
    const { id } = useParams(); // null при добавлении, число — при редактировании
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: '',
        position: '',
        dateOfBirth: '',
        passport: '',
        gender: '',
        placeOfLiving: '',
    });

    const isEdit = Boolean(id);

    useEffect(() => {
        if (isEdit) {
            api.employees.getById(id).then(res => {
                const emp = res.data;
                setFormData({
                    fullname: emp.fullname,
                    position: emp.position,
                    dateOfBirth: emp.dateOfBirth.slice(0, 10), // формат YYYY-MM-DD
                    passport: emp.passport,
                    gender: emp.gender,
                    placeOfLiving: emp.placeOfLiving || '',
                });
            });
        }
    }, [id, isEdit]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            if (isEdit) {
                await api.employees.update(id, formData);
            } else {
                await api.employees.create(formData);
            }
            navigate('/employees');
        } catch (err) {
            console.error(err);
            alert('Ошибка при сохранении');
        }
    };

    return (
        <div className="mt-4">
            <h2>{isEdit ? 'Edit Employee' : 'Add Employee'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input name="fullname" className="form-control" value={formData.fullname} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Position</label>
                    <input name="position" className="form-control" value={formData.position} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input type="date" name="dateOfBirth" className="form-control" value={formData.dateOfBirth} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Passport</label>
                    <input name="passport" className="form-control" value={formData.passport} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <select name="gender" className="form-select" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Place of Living</label>
                    <input name="placeOfLiving" className="form-control" value={formData.placeOfLiving} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/employees')}>Cancel</button>
            </form>
        </div>
    );
}
