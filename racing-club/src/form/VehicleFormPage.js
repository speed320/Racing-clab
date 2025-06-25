import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/Api';

export default function VehicleFormPage() {
    const { id } = useParams(); // null при добавлении, строка при редактировании
    const navigate = useNavigate();
    const isEdit = Boolean(id);

    const [racers, setRacers] = useState([]);
    const [formData, setFormData] = useState({
        type: '',
        make: '',
        model: '',
        year: '',
        engineNumber: '',
        racerId: '',  // теперь поле racerId
        description: ''
    });

    useEffect(() => {
        (async () => {
            try {
                const racersRes = await api.racers.getAll();
                setRacers(racersRes.data);

                if (isEdit) {
                    const vehicleRes = await api.vehicles.getById(id);
                    const v = vehicleRes.data;
                    setFormData({
                        type: v.type || '',
                        make: v.make || '',
                        model: v.model || '',
                        year: v.year?.toString() || '',
                        engineNumber: v.engineNumber || '',
                        racerId: v.racerId?.toString() || '',
                        description: v.description || ''
                    });
                }
            } catch (err) {
                console.error('Ошибка при загрузке данных VehicleFormPage:', err);
            }
        })();
    }, [id, isEdit]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const payload = {
                type: formData.type,
                make: formData.make,
                model: formData.model,
                year: parseInt(formData.year, 10),
                engineNumber: formData.engineNumber,
                racerId: formData.racerId ? parseInt(formData.racerId, 10) : null,
                description: formData.description
            };
            if (isEdit) {
                await api.vehicles.update(id, payload);
            } else {
                await api.vehicles.create(payload);
            }
            navigate('/vehicles');
        } catch (err) {
            console.error('Ошибка при сохранении машины:', err);
            alert('Ошибка при сохранении');
        }
    };

    return (
        <div className="mt-4">
            <h2>{isEdit ? 'Edit Vehicle' : 'Add Vehicle'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Type</label>
                    <input
                        name="type"
                        className="form-control"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Make</label>
                    <input
                        name="make"
                        className="form-control"
                        value={formData.make}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Model</label>
                    <input
                        name="model"
                        className="form-control"
                        value={formData.model}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Year</label>
                    <input
                        type="number"
                        name="year"
                        className="form-control"
                        value={formData.year}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Engine Number</label>
                    <input
                        name="engineNumber"
                        className="form-control"
                        value={formData.engineNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

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
                            <option key={r.id} value={r.id.toString()}>
                                {r.fullName}
                            </option>
                        ))}
                    </select>
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

                <button type="submit" className="btn btn-success">
                    Save
                </button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate('/vehicles')}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}
