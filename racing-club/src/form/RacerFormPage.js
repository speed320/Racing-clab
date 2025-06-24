import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/Api';

export default function RacerFormPage() {
    const { id } = useParams(); // null при добавлении, число — при редактировании
    const navigate = useNavigate();

    const [photoFile, setPhotoFile] = useState(null);
    const [teams, setTeams] = useState([]);
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        category: '',
        licenseNumber: '',
        contactInfo: '',
        gender: '',
        country: '',
        team: '',
        photo: '',
    });

    const isEdit = Boolean(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const teamsRes = await api.teams.getAll();
                setTeams(teamsRes.data);

                if (isEdit) {
                    const racerRes = await api.racers.getById(id);
                    const racer = racerRes.data;

                    setFormData({
                        fullName: racer.fullName,
                        dateOfBirth: racer.dateOfBirth.slice(0, 10),
                        category: racer.category,
                        licenseNumber: racer.licenseNumber,
                        contactInfo: racer.contactInfo,
                        gender: racer.gender,
                        country: racer.country,
                        team: racer.teamId?.toString() || '', // 👈 обязательно строка
                        photo: racer.photo,
                    });

                    console.log('racer.team.id:', racer.team?.id);
                    console.log('formData.team (после установки):', racer.team?.id?.toString() || '');
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('fullName', formData.fullName);
        form.append('dateOfBirth', formData.dateOfBirth);
        form.append('category', formData.category);
        form.append('licenseNumber', formData.licenseNumber);
        form.append('contactInfo', formData.contactInfo);
        form.append('gender', formData.gender);
        form.append('country', formData.country);
        if (formData.team) {
            form.append('teamId', formData.team);
        }
        if (photoFile) {
            form.append('photo', photoFile);
        } else {
            form.append('photoPath', formData.photo); // если путь уже сохранён
        }

        try {
            if (isEdit) {
                await api.racers.updateMultipart(id, form); // нужно реализовать multipart endpoint
            } else {
                await api.racers.createMultipart(form);
            }
            navigate('/racers');
        } catch (err) {
            console.error(err);
            alert('Ошибка при сохранении');
        }
    };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhotoFile(file);
            setFormData(prev => ({
                ...prev,
                photo: URL.createObjectURL(file) // показывает превью
            }));
        }
    };

    return (
        <div className="mt-4">
            <h2>{isEdit ? 'Edit Racer' : 'Add Racer'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Photo</label>
                    {formData.photo && (
                        <div className="mb-2">
                            <img src={formData.photo.startsWith('blob:')
                                ? formData.photo
                                : `/uploads/${formData.photo}`} // зависит от структуры API
                                 alt="Racer"
                                 style={{ maxHeight: '150px', objectFit: 'cover' }}
                            />
                        </div>
                    )}
                    <input type="file" accept="image/*" className="form-control" onChange={handleFileChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input name="fullName" className="form-control" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input type="date" name="dateOfBirth" className="form-control" value={formData.dateOfBirth} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input name="category" className="form-control" value={formData.category} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">License Number</label>
                    <input name="licenseNumber" className="form-control" value={formData.licenseNumber} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact Info</label>
                    <input name="contactInfo" className="form-control" value={formData.contactInfo} onChange={handleChange} required/>
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
                    <label className="form-label">Country</label>
                    <input name="country" className="form-control" value={formData.country} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Team</label>
                    <select name="team" className="form-select" value={formData.team} onChange={handleChange}>
                        <option value="">Select Team</option>
                        {teams.map(team => (
                            <option key={team.id} value={team.id.toString()}>
                                {team.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/racers')}>Cancel</button>
            </form>
        </div>
    );
}
