import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Api, { SERVER_URL } from '../api/Api';

export default function RacerFormPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = Boolean(id);

    const [teams, setTeams] = useState([]);
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        category: '',
        licenseNumber: '',
        contactInfo: '',
        gender: '',
        country: '',
        teamId: '',
        photo: '',
    });
    const [loading, setLoading] = useState(true);

    const getPhotoSrc = (path) => {
        if (!path) return '';
        if (path.startsWith('http')) return path;
        const p = path.startsWith('/') ? path : `/${path}`;
        return `${SERVER_URL}${p}`;
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const teamsRes = await Api.teams.getAll();
                setTeams(teamsRes.data);

                if (isEdit) {
                    const racerRes = await Api.racers.getById(id);
                    const r = racerRes.data;
                    setFormData({
                        fullName:      r.fullName,
                        dateOfBirth:   r.dateOfBirth.slice(0, 10),
                        category:      r.category,
                        licenseNumber: r.licenseNumber,
                        contactInfo:   r.contactInfo || '',
                        gender:        r.gender,
                        country:       r.country,
                        teamId:        r.teamId?.toString() || '',
                        photo:         r.photo ? (r.photo.startsWith('/') ? r.photo : `/${r.photo}`) : '',
                    });
                }
            } catch (err) {
                console.error('Ошибка при загрузке данных RacerFormPage:', err);
                alert('Не удалось загрузить данные');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id, isEdit]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fd => ({ ...fd, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const payload = {
            ...formData,
            teamId: formData.teamId ? parseInt(formData.teamId, 10) : null,
        };

        try {
            if (isEdit) {
                await Api.racers.update(id, payload);
            } else {
                await Api.racers.create(payload);
            }
            navigate('/racers');
        } catch (err) {
            console.error('Ошибка при сохранении Racer:', err);
            alert('Ошибка при сохранении гонщика');
        }
    };

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="mt-4">
            <h2>{isEdit ? 'Edit Racer' : 'Add Racer'}</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        name="fullName"
                        className="form-control"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        className="form-control"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input
                        name="category"
                        className="form-control"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">License Number</label>
                    <input
                        name="licenseNumber"
                        className="form-control"
                        value={formData.licenseNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Contact Info</label>
                    <input
                        name="contactInfo"
                        className="form-control"
                        value={formData.contactInfo}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <select
                        name="gender"
                        className="form-select"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
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
                    <label className="form-label">Team</label>
                    <select
                        name="teamId"
                        className="form-select"
                        value={formData.teamId}
                        onChange={handleChange}
                    >
                        <option value="">None</option>
                        {teams.map(team => (
                            <option key={team.id} value={team.id.toString()}>
                                {team.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Photo Path</label>
                    <input
                        name="photo"
                        className="form-control"
                        placeholder="/uploads/filename.jpg"
                        value={formData.photo}
                        onChange={handleChange}
                    />
                    {formData.photo && (
                        <div className="mt-2">
                            <img
                                src={getPhotoSrc(formData.photo)}
                                alt="Racer"
                                style={{ maxHeight: '150px', objectFit: 'cover' }}
                            />
                        </div>
                    )}
                </div>

                <button type="submit" className="btn btn-success">
                    {isEdit ? 'Update' : 'Create'}
                </button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate('/racers')}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}
