import React from 'react';
import DataTable from '../component/DataTable';
import api from '../api/Api';
import {EntityType} from "../permissions";

const VehiclesPage = () => {
    const columns = [
        { header: 'ID', accessor: (item) => item.id },
        { header: 'Type', accessor: (item) => item.type },
        { header: 'Make', accessor: (item) => item.make },
        { header: 'Model', accessor: (item) => item.model },
        { header: 'Year', accessor: (item) => item.year },
        { header: 'Engine', accessor: (item) => item.engineNumber }
    ];

    return <DataTable endpoint={api.vehicles} columns={columns} entity={EntityType.VEHICLE} />;
};

export default VehiclesPage;