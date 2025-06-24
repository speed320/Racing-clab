import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/Api';

export default function TeamFormPage() {
    const { id } = useParams(); // null при добавлении, число — при редактировании
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        city: '',
        contactInfo: '',
        managerName: '',
    });

    const isEdit = Boolean(id);

    useEffect(() => {
        if (isEdit) {
            api.teams.getById(id).then(res => {
                const team = res.data;
                setFormData({
                    name: team.name,
                    city: team.city,
                    contactInfo: team.contactInfo,
                    managerName: team.managerName
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
                await api.teams.update(id, formData);
            } else {
                await api.teams.create(formData);
            }
            navigate('/teams');
        } catch (err) {
            console.error(err);
            alert('Ошибка при сохранении');
        }
    };

    return (
        <div className="mt-4">
            <h2>{isEdit ? 'Edit Team' : 'Add Team'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input name="city" className="form-control" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact Info</label>
                    <input name="contactInfo" className="form-control" value={formData.contactInfo} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Manager Name</label>
                    <input name="managerName" className="form-control" value={formData.managerName} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/teams')}>Cancel</button>
            </form>
        </div>
    );
}
