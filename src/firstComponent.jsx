import React from 'react';

class FirstComponent extends React.Component {
    render() {
        return (
            <div className="welcome-container">
                <h1>Hello, {this.props.name}</h1>
            </div>
        );
    }
}

export default FirstComponent;