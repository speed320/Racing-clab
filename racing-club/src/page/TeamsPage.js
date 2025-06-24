import React from 'react';
import DataTable from '../component/DataTable';
import api from '../api/Api';
import {EntityType} from "../permissions";

const TeamsPage = () => {
    const columns = [
        { header: 'ID', accessor: (item) => item.id },
        { header: 'Name', accessor: (item) => item.name },
        { header: 'City', accessor: (item) => item.city || '-' },
        { header: 'Manager', accessor: (item) => item.managerName || '-' },
        { header: 'Contact', accessor: (item) => item.contactInfo || '-' }
    ];

    return <DataTable endpoint={api.teams} columns={columns} entity={EntityType.TEAM}/>;
};

export default TeamsPage;