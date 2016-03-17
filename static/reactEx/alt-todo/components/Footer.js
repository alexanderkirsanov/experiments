import React from 'react';

const Footer = (props) => {
    const button = props.areAnyComplete ?
        <a href="#"
           className="btn btn-primary"
           onClick={ props.clearAllCompleted }>
            Clear all complete</a>
        : null;
    return (<div id="footer">
        { button }
    </div>);
};
Footer.PropTypes = {
    clearAllCompleted: React.PropTypes.func.isRequired
};
export default Footer;