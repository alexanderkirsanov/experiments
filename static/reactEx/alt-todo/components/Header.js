import React from 'react';
import TodoTextInput from './TodoTextInput';


const Header = (props) => {
    return (<div><h1>Todos</h1><TodoTextInput onSave={props.onSave}/></div>);
};
Header.PropTypes = {
    onSave: React.PropTypes.func.isRequired
};
export default Header;