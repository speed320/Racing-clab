import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/Api';

export default function RatingFormPage() {
    const { racerId, raceId } = useParams(); // оба параметра нужны для редактирования
    const navigate = useNavigate();

    const isEdit = Boolean(racerId && raceId);

    const [racers, setRacers] = useState([]);
    const [races, setRaces] = useState([]);
    const [formData, setFormData] = useState({
        racer: '',
        race: '',
        racerPlace: '',
        racerTime: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [racersRes, racesRes] = await Promise.all([
                    api.racers.getAll(),
                    api.races.getAll()
                ]);
                setRacers(racersRes.data);
                setRaces(racesRes.data);

                if (isEdit) {
                    const ratingRes = await api.ratings.getById(racerId, raceId);
                    const rating = ratingRes.data;

                    setFormData({
                        racer: rating.racerId.toString(),
                        race: rating.raceId.toString(),
                        racerPlace: rating.racerPlace.toString(),
                        racerTime: rating.racerTime, // формат HH:mm:ss
                    });
                }
            } catch (err) {
                console.error('Ошибка при загрузке данных', err);
            }
        };

        fetchData();
    }, [isEdit, racerId, raceId]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const payload = {
            racerPlace: parseInt(formData.racerPlace),
            racerTime: formData.racerTime,
            racer: { id: parseInt(formData.racer) },
            race: { id: parseInt(formData.race) },
        };

        try {
            if (isEdit) {
                await api.ratings.update(racerId, raceId, payload);
            } else {
                await api.ratings.create(payload);
            }
            navigate('/ratings');
        } catch (err) {
            console.error(err);
            alert('Ошибка при сохранении');
        }
    };

    return (
        <div className="mt-4">
            <h2>{isEdit ? 'Edit Rating' : 'Add Rating'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Racer</label>
                    <select name="racer" className="form-select" value={formData.racer} onChange={handleChange} required disabled={isEdit}>
                        <option value="">Select Racer</option>
                        {racers.map(r => (
                            <option key={r.id} value={r.id}>{r.fullName}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Race</label>
                    <select name="race" className="form-select" value={formData.race} onChange={handleChange} required disabled={isEdit}>
                        <option value="">Select Race</option>
                        {races.map(r => (
                            <option key={r.id} value={r.id}>{r.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Racer Place</label>
                    <input type="number" name="racerPlace" className="form-control" value={formData.racerPlace} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Racer Time (HH:mm:ss)</label>
                    <input type="time" step="1" name="racerTime" className="form-control" value={formData.racerTime} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/ratings')}>Cancel</button>
            </form>
        </div>
    );
}
