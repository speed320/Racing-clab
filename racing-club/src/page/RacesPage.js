import React from 'react';
import DataTable from '../component/DataTable';
import api from '../api/Api';
import {EntityType} from "../permissions";

const RacesPage = () => {
    const columns = [
        { header: 'ID', accessor: (item) => item.id },
        { header: 'Name', accessor: (item) => item.name },
        {
            header: 'Date',
            accessor: (item) => new Date(item.date).toLocaleDateString()
        },
        { header: 'Location', accessor: (item) => item.location },
        { header: 'Type', accessor: (item) => item.type },
        { header: 'Distance', accessor: (item) => item.distance ? `${item.distance} km` : '-' }
    ];

    return <DataTable endpoint={api.races} columns={columns} entity={EntityType.RACE} />;
};

export default RacesPage;