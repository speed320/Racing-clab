import React from 'react';
import DataTable from '../component/DataTable';
import api from '../api/Api';
import {EntityType} from "../permissions";

const TracksPage = () => {
    const columns = [
        { header: 'ID', accessor: (item) => item.id },
        { header: 'Name', accessor: (item) => item.name },
        { header: 'Length', accessor: (item) => item.length ? `${item.length} km` : '-' },
        { header: 'Turns', accessor: (item) => item.turnsCount || '-' },
        { header: 'Surface', accessor: (item) => item.surfaceType || '-' },
        { header: 'Country', accessor: (item) => item.country }
    ];

    return <DataTable endpoint={api.tracks} columns={columns} entity={EntityType.TRACK}/>;
};

export default TracksPage;