import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/Api';

export default function TrackFormPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = Boolean(id);

    const [formData, setFormData] = useState({
        name: '',
        length: '',
        turnsCount: '',
        surfaceType: '',
        description: '',
        country: '',
        city: '',
    });

    useEffect(() => {
        if (isEdit) {
            api.tracks.getById(id).then(res => {
                const track = res.data;
                setFormData({
                    name: track.name,
                    length: track.length ?? '',
                    turnsCount: track.turnsCount ?? '',
                    surfaceType: track.surfaceType || '',
                    description: track.description || '',
                    country: track.country,
                    city: track.city,
                });
            }).catch(err => console.error('Ошибка при загрузке трека:', err));
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
                ...formData,
                length: parseFloat(formData.length),
                turnsCount: formData.turnsCount !== '' ? parseInt(formData.turnsCount, 10) : null,
            };
            if (isEdit) await api.tracks.update(id, payload);
            else         await api.tracks.create(payload);
            navigate('/tracks');
        } catch (err) {
            console.error('Ошибка при сохранении трека:', err);
            alert('Ошибка при сохранении');
        }
    };

    return (
        <div className="mt-4">
            <h2>{isEdit ? 'Edit Track' : 'Add Track'}</h2>
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
                    <label className="form-label">Length</label>
                    <input
                        type="number"
                        step="any"
                        name="length"
                        className="form-control"
                        value={formData.length}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Turns Count</label>
                    <input
                        type="number"
                        name="turnsCount"
                        className="form-control"
                        value={formData.turnsCount}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Surface Type</label>
                    <input
                        name="surfaceType"
                        className="form-control"
                        value={formData.surfaceType}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        name="description"
                        className="form-control"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Country</label>
                    <input
                        name="country"
                        className="form-control"
                        value={formData.country}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input
                        name="city"
                        className="form-control"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Save</button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate('/tracks')}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}
