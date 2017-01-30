import React from 'react';


export default class Introduction extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="introduction-container">

                <div className="introduction-bg_color">

                </div>

                <div
                    className="introduction"
                >
                    <div
                        className="introduction-title"
                    >
                        Daniel Roos
                    </div>
                    <hr
                        className="introduction-hr"
                    />

                    <div
                        className="introduction-subtitle"
                    >
                        En hemsida för mig
                    </div>
                </div>
            </div>
        );
    }
}

