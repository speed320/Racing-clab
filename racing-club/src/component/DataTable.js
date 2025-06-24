import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { PermissionAction } from '../permissions';

export default function DataTable({ endpoint, columns, entity, getEditPath }) {
    const { hasPermission, loading: authLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const canRead   = hasPermission(entity, PermissionAction.READ);
    const canCreate = hasPermission(entity, PermissionAction.CREATE);
    const canUpdate = hasPermission(entity, PermissionAction.UPDATE);
    const canDelete = hasPermission(entity, PermissionAction.DELETE);

    useEffect(() => {
        if (authLoading) return; // ждём, пока подтянутся права

        if (!canRead) {
            setLoading(false); // иначе зависнет на "Loading"
            navigate('/', { replace: true }); // нет прав — редиректим
            return;
        }

        (async () => {
            try {
                const resp = await endpoint.getAll();
                setData(resp.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        })();
    }, [authLoading, canRead, endpoint, navigate]);

    if (authLoading || loading) return <div>Loading…</div>;

    return (
        <div className="mt-4">
            <div className="d-flex justify-content-between mb-2">
                <h2>{entity} Table</h2>
                {canCreate && (
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate('add')}
                    >
                        Add New
                    </button>
                )}
            </div>
            <table className="table table-striped">
                <thead className="table-dark">
                <tr>
                    {columns.map((c, i) => <th key={i}>{c.header}</th>)}
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id || `${item.racerId}-${item.raceId}`}>
                        {columns.map((c, i) => <td key={i}>{c.accessor(item)}</td>)}
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
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
