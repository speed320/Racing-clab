import React from 'react';
import DataTable from '../component/DataTable';
import api from '../api/Api';
import {EntityType} from "../permissions";

const RatingsPage = () => {
    const columns = [
        {
            header: 'Racer',
            accessor: (item) => item.racerName || '-'
        },
        {
            header: 'Race',
            accessor: (item) => item.raceName || '-'
        },
        { header: 'Place', accessor: (item) => item.racerPlace },
        {
            header: 'Time',
            accessor: (item) => {
                if (!item.racerTime) return '-';
                const time = new Date(`1970-01-01T${item.racerTime}`);
                return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            }
        }
    ];
    const getEditPath = (item) => `edit/${item.racerId}/${item.raceId}`;

    return <DataTable endpoint={api.ratings} columns={columns} entity={EntityType.RATING} getEditPath={getEditPath}/>;
};

export default RatingsPage;