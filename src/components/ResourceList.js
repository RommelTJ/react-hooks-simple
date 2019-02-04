import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {

    const [resources, setResources] = useState([]);

    const fetchResource = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources({ resources: response.data });
    };

    return <div>{resources.length}</div>;
};

export default ResourceList;