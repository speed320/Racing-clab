import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/Api';

export default function RaceFormPage() {
    const { id } = useParams(); // null при добавлении, число — при редактировании
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: '',
        type: '',
        distance: '',
        description: '',
        place: '',
        time: '',
    });

    const isEdit = Boolean(id);

    useEffect(() => {
        if (isEdit) {
            api.races.getById(id).then(res => {
                const race = res.data;
                setFormData({
                    name: race.name,
                    date: race.date.slice(0, 10), // формат YYYY-MM-DD
                    location: race.location,
                    type: race.type,
                    distance: race.distance || '',
                    description: race.description,
                    place: race.place,
                    time: race.time,
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
                await api.races.update(id, formData);
            } else {
                await api.races.create(formData);
            }
            navigate('/races');
        } catch (err) {
            console.error(err);
            alert('Ошибка при сохранении');
        }
    };

    return (
        <div className="mt-4">
            <h2>{isEdit ? 'Edit Race' : 'Add Race'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input name="location" className="form-control" value={formData.location} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Type</label>
                    <input name="type" className="form-control" value={formData.type} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Distance</label>
                    <input name="distance" className="form-control" value={formData.distance} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input name="description" className="form-control" value={formData.description} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Place</label>
                    <input name="place" className="form-control" value={formData.place} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Time</label>
                    <input name="time" className="form-control" value={formData.time} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/races')}>Cancel</button>
            </form>
        </div>
    );
}
