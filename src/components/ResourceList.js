import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {

    state = { resources: [] };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
    }

    render() {
        return <div>{this.props.resource}</div>;
    }

}

export default ResourceList;