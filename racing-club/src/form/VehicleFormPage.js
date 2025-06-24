import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/Api';

export default function VehicleFormPage() {
    const { id } = useParams(); // null при добавлении, число — при редактировании
    const navigate = useNavigate();

    const [racers, setRacers] = useState([]);
    const [formData, setFormData] = useState({
        type: '',
        make: '',
        model: '',
        year: '',
        engineNumber: '',
        racer: '',
        description: '',
    });

    const isEdit = Boolean(id);

    useEffect(() => {
        const fetchRacersAndVehicle = async () => {
            try {
                // Сначала получаем гонщиков
                const racersRes = await api.racers.getAll();
                setRacers(racersRes.data);

                // Затем, если редактирование — загружаем машину
                if (isEdit) {
                    const vehicleRes = await api.vehicles.getById(id);
                    const vehicle = vehicleRes.data;

                    setFormData({
                        type: vehicle.type,
                        make: vehicle.make,
                        model: vehicle.model,
                        year: vehicle.year.toString(),
                        engineNumber: vehicle.engineNumber,
                        racer: vehicle.racerId.toString(), // теперь select корректно отобразится
                        description: vehicle.description || '',
                    });
                }
            } catch (err) {
                console.error('Ошибка при загрузке данных', err);
            }
        };

        fetchRacersAndVehicle();
    }, [id, isEdit]);


    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const payload = {
            ...formData,
            year: parseInt(formData.year),
            racer: { id: parseInt(formData.racer) },
        };

        try {
            if (isEdit) {
                await api.vehicles.update(id, payload);
            } else {
                await api.vehicles.create(payload);
            }
            navigate('/vehicles');
        } catch (err) {
            console.error(err);
            alert('Ошибка при сохранении');
        }
    };

    return (
        <div className="mt-4">
            <h2>{isEdit ? 'Edit Vehicle' : 'Add Vehicle'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Type</label>
                    <input name="type" className="form-control" value={formData.type} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Make</label>
                    <input name="make" className="form-control" value={formData.make} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Model</label>
                    <input name="model" className="form-control" value={formData.model} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Year</label>
                    <input name="year" type="number" className="form-control" value={formData.year} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Engine Number</label>
                    <input name="engineNumber" className="form-control" value={formData.engineNumber} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Racer</label>
                    <select name="racer" className="form-select" value={formData.racer} onChange={handleChange} required>
                        <option value="">Select Racer</option>
                        {racers.map(racer => (
                            <option key={racer.id} value={racer.id.toString()}>
                                {racer.fullName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input name="description" className="form-control" value={formData.description} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/vehicles')}>Cancel</button>
            </form>
        </div>
    );
}
