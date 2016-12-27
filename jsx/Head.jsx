import React from 'react';
import ReactDOM from 'react-dom';


const mountNode = document.getElementById('head');

class Head extends React.Component {
    render() {
        return (
            <div>
                Hello, world!
            </div>
        )
    }
}

ReactDOM.render(<Head/>, mountNode);