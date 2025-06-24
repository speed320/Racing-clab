import React from 'react';
import DataTable from '../component/DataTable';
import Api from '../api/Api';
import { EntityType } from '../permissions';

export default function EmployeesPage() {
    const columns = [
        { header: 'ID', accessor: item => item.id },
        { header: 'Full Name', accessor: item => item.fullname },
        { header: 'Position', accessor: item => item.position },
        { header: 'Birth Date', accessor: item => new Date(item.dateOfBirth).toLocaleDateString() },
        { header: 'Gender', accessor: item => item.gender },
        { header: 'Location', accessor: item => item.placeOfLiving || '-' },
    ];

    return (
        <DataTable
            endpoint={Api.employees}
            columns={columns}
            entity={EntityType.EMPLOYEE}
        />
    );
}
