import React from 'react';

const ResourceList = ({ resource }) => {

    const resources = useResources(resource);

    return (
        <ul>
            {resources.map(record => <li key={record.id}>{record.title}</li>)}
        </ul>
    );
};

export default ResourceList;