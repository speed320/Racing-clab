import React from 'react';
import DataTable from '../component/DataTable';
import Api from '../api/Api';
import { EntityType } from '../permissions';

export default function UsersPage() {
    const columns = [
        { header: 'ID', accessor: item => item.id },
        { header: 'Name', accessor: item => item.name },
        { header: 'Email', accessor: item => item.email },
        { header: 'Role', accessor: item => item.role },
        {header: 'Racer', accessor: item => item.racerName || '-'},
        {header: 'Employee', accessor: item => item.employeeName || '-'}
    ];

    return (
        <DataTable
            endpoint={Api.users}
            columns={columns}
            entity={EntityType.USER}
        />
    );
}
