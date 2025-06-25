import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/Api';

export default function RatingFormPage() {
    const { racerId: racerIdParam, raceId: raceIdParam } = useParams();
    const navigate = useNavigate();
    const isEdit = Boolean(racerIdParam && raceIdParam);

    const [racers, setRacers] = useState([]);
    const [races, setRaces] = useState([]);
    const [formData, setFormData] = useState({
        racerId: '',
        raceId: '',
        racerPlace: '',
        racerTime: ''
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const [racersRes, racesRes] = await Promise.all([
                    api.racers.getAll(),
                    api.races.getAll()
                ]);
                setRacers(racersRes.data);
                setRaces(racesRes.data);

                if (isEdit) {
                    const resp = await api.ratings.getById(racerIdParam, raceIdParam);
                    const r = resp.data;
                    setFormData({
                        racerId: r.racerId.toString(),
                        raceId: r.raceId.toString(),
                        racerPlace: r.racerPlace.toString(),
                        racerTime: r.racerTime
                    });
                }
            } catch (err) {
                console.error('Ошибка при загрузке данных RatingFormPage:', err);
            }
        }
        fetchData();
    }, [isEdit, racerIdParam, raceIdParam]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const payload = {
            racerId: parseInt(formData.racerId, 10),
            raceId: parseInt(formData.raceId, 10),
            racerPlace: parseInt(formData.racerPlace, 10),
            racerTime: formData.racerTime
        };
        try {
            if (isEdit) {
                await api.ratings.update(racerIdParam, raceIdParam, payload);
            } else {
                await api.ratings.create(payload);
            }
            navigate('/ratings');
        } catch (err) {
            console.error('Ошибка при сохранении рейтинга:', err);
            alert('Ошибка при сохранении');
        }
    };

    return (
        <div className="mt-4">
            <h2>{isEdit ? 'Edit Rating' : 'Add Rating'}</h2>
            <form onSubmit={handleSubmit}>
                {!isEdit && (
                    <div className="mb-3">
                        <label className="form-label">Racer</label>
                        <select
                            name="racerId"
                            className="form-select"
                            value={formData.racerId}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Racer</option>
                            {racers.map(r => (
                                <option key={r.id} value={r.id}>
                                    {r.fullName}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {!isEdit && (
                    <div className="mb-3">
                        <label className="form-label">Race</label>
                        <select
                            name="raceId"
                            className="form-select"
                            value={formData.raceId}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Race</option>
                            {races.map(r => (
                                <option key={r.id} value={r.id}>
                                    {r.name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <div className="mb-3">
                    <label className="form-label">Place</label>
                    <input
                        type="number"
                        name="racerPlace"
                        className="form-control"
                        value={formData.racerPlace}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Time (HH:mm:ss)</label>
                    <input
                        type="time"
                        step="1"
                        name="racerTime"
                        className="form-control"
                        value={formData.racerTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Save
                </button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate('/ratings')}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}
