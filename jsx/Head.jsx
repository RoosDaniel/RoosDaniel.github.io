import React from 'react';
import ReactDOM from 'react-dom';

import Introduction from './Introduction.jsx';

const mountNode = document.getElementById('head');

class Head extends React.Component {
    render() {
        return (
            <div>
                <Introduction/>
                <div
                    id="page-content"
                >
                    <h1>Hi this is page</h1>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Head/>, mountNode);
