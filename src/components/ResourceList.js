import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {

    state = { resources: [] };

    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({ resources: response.data });
    }

    render() {
        return <div>{this.props.resource}</div>;
    }

}

export default ResourceList;