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
        distance: '',  // в километрах
        description: '',
        place: '',
        time: '',      // формат HH:mm:ss
    });

    const isEdit = Boolean(id);

    useEffect(() => {
        if (isEdit) {
            api.races.getById(id).then(res => {
                const race = res.data;
                setFormData({
                    name: race.name,
                    date: race.date.slice(0, 10),
                    location: race.location,
                    type: race.type || '',
                    distance: race.distance?.toString() || '',
                    description: race.description || '',
                    place: race.place || '',
                    time: race.time || '',
                });
            }).catch(err => console.error('Ошибка при загрузке гонки:', err));
        }
    }, [id, isEdit]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const payload = {
                name: formData.name,
                date: formData.date,
                location: formData.location,
                type: formData.type,
                distance: formData.distance !== '' ? parseFloat(formData.distance) : null,
                description: formData.description,
                place: formData.place,
                time: formData.time,
            };

            if (isEdit) {
                await api.races.update(id, payload);
            } else {
                await api.races.create(payload);
            }
            navigate('/races');
        } catch (err) {
            console.error('Ошибка при сохранении гонки:', err);
            alert('Ошибка при сохранении');
        }
    };

    return (
        <div className="mt-4">
            <h2>{isEdit ? 'Edit Race' : 'Add Race'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input
                        type="date"
                        name="date"
                        className="form-control"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input
                        name="location"
                        className="form-control"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Type</label>
                    <input
                        name="type"
                        className="form-control"
                        value={formData.type}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Distance (km)</label>
                    <div className="input-group">
                        <input
                            type="number"
                            name="distance"
                            className="form-control"
                            value={formData.distance}
                            onChange={handleChange}
                            step="0.001"
                            min="0"
                            placeholder="e.g. 307.574"
                        />
                        <span className="input-group-text">km</span>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Time (HH:mm)</label>
                    <input
                        type="time"
                        name="time"
                        className="form-control"
                        value={formData.time}
                        onChange={handleChange}
                        step="1"
                    />
                    <small className="form-text text-muted">
                        Укажите время старта в формате часы:минуты:секунды
                    </small>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        name="description"
                        className="form-control"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Place</label>
                    <input
                        name="place"
                        className="form-control"
                        value={formData.place}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-success">
                    Save
                </button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate('/races')}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}
