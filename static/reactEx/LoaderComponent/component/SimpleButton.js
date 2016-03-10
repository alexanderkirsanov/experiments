import React from 'react';
let SimpleButton = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<p onClick={this.props.handleClick}>
            {this.props.text}
        </p>);
    }
};
SimpleButton.propTypes = {
    handleClick: React.PropTypes.func.isRequired
};
export default SimpleButton;
