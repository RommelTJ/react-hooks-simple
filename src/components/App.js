import React, { useState } from 'react';

class App extends React.Component {

    state = { resource: 'posts' };

    onButtonClick = (resource) => {
        this.setState({ resource });
    };

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.onButtonClick('posts')} >Posts</button>
                    <button onClick={() => this.onButtonClick('todos')}>Todos</button>
                </div>
            </div>
        );
    }

}

export default App;
