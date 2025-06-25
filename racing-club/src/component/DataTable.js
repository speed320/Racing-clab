import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { PermissionAction } from '../permissions';
import Api from '../api/Api';

export default function DataTable({ endpoint, columns, entity, getEditPath }) {
    const { hasPermission, loading: authLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const canRead   = hasPermission(entity, PermissionAction.READ);
    const canCreate = hasPermission(entity, PermissionAction.CREATE);
    const canUpdate = hasPermission(entity, PermissionAction.UPDATE);
    const canDelete = hasPermission(entity, PermissionAction.DELETE);
    const canExport = canRead;

    const showActions = canUpdate || canDelete;

    const exportKeys = {
        USER:     'users',
        RACER:    'racers',
        TEAM:     'teams',
        RACE:     'races',
        TRACK:    'tracks',
        VEHICLE:  'vehicles',
        RATING:   'ratings',
        EMPLOYEE: 'employees'
    };

    useEffect(() => {
        if (authLoading) return;
        if (!canRead) {
            setLoading(false);
            navigate('/', { replace: true });
            return;
        }
        (async () => {
            try {
                const resp = await endpoint.getAll();
                const list = Array.isArray(resp.data) ? [...resp.data] : [];
                list.sort((a, b) => {
                    if (a.id != null && b.id != null) return a.id - b.id;
                    if (a.racerId != null && b.racerId != null) {
                        if (a.racerId !== b.racerId) return a.racerId - b.racerId;
                        return (a.raceId || 0) - (b.raceId || 0);
                    }
                    return 0;
                });
                setData(list);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        })();
    }, [authLoading, canRead, endpoint, navigate]);

    const downloadExcel = async () => {
        const key = exportKeys[entity];
        if (!key) {
            return alert(`Неизвестная сущность для экспорта: ${entity}`);
        }

        try {
            const resp = await Api.exportExcel[key]();
            const blob = new Blob(
                [resp.data],
                { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
            );
            const url  = window.URL.createObjectURL(blob);
            const a    = document.createElement('a');
            a.href     = url;
            a.download = `${key}.xlsx`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (e) {
            console.error('Export XLSX failed', e);
            alert('Не удалось экспортировать в Excel');
        }
    };

    if (authLoading || loading) return <div>Loading…</div>;

    return (
        <div className="mt-4">
            <div className="d-flex justify-content-between mb-2">
                <h2>{entity} Table</h2>
                <div>
                    {canExport && (
                        <button
                            className="btn btn-outline-secondary me-2"
                            onClick={downloadExcel}
                        >
                            Export XLSX
                        </button>
                    )}
                    {canCreate && (
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate('add')}
                        >
                            Add New
                        </button>
                    )}
                </div>
            </div>

            <table className="table table-striped">
                <thead className="table-dark">
                <tr>
                    {columns.map((c, i) => <th key={i}>{c.header}</th>)}
                    {showActions && <th>Actions</th>}
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id ?? `${item.racerId}-${item.raceId}`}>
                        {columns.map((c, i) => <td key={i}>{c.accessor(item)}</td>)}
                        {showActions && (
                            <td>
                                {canUpdate && (
                                    <button
                                        className="btn btn-sm btn-warning me-1"
                                        onClick={() => navigate(getEditPath ? getEditPath(item) : `edit/${item.id}`)}
                                    >
                                        Edit
                                    </button>
                                )}
                                {canDelete && (
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={async () => {
                                            if (!window.confirm('Уверены?')) return;
                                            await endpoint.delete(item.id);
                                            setData(prev => prev.filter(x => x.id !== item.id));
                                        }}
                                    >
                                        Delete
                                    </button>
                                )}
                            </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
