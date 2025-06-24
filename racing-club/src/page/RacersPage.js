import React from 'react';
import DataTable from '../component/DataTable';
import api from '../api/Api';
import { EntityType } from '../permissions';

const RacersPage = () => {
    const columns = [
        { header: 'ID', accessor: (item) => item.id },
        { header: 'Full Name', accessor: (item) => item.fullName },
        {
            header: 'Birth Date',
            accessor: (item) => new Date(item.dateOfBirth).toLocaleDateString()
        },
        { header: 'License', accessor: (item) => item.licenseNumber },
        { header: 'Category', accessor: (item) => item.category },
        { header: 'Gender', accessor: (item) => item.gender },
        { header: 'Country', accessor: (item) => item.country }
    ];

    return <DataTable endpoint={api.racers} columns={columns} entity={EntityType.RACER} />;
};

export default RacersPage;