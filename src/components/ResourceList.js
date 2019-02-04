import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {

    render() {
        return <div>{this.props.resource}</div>;
    }

}

export default ResourceList;