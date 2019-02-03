import React from 'react';

class App extends React.Component {

    state = { resource: 'posts' };

    render() {
        return (
            <div>
                <div>
                    <button>Posts</button>
                    <button>Todos</button>
                </div>
                {this.state.resource}
            </div>
        );
    }

}

export default App;
