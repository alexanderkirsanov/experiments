import ReactDOM from 'react-dom';
import React from 'react';
import Loader from './component/Loader';
import SimpleButton from './component/SimpleButton';

let App = class extends React.Component {
    constructor(props) {
        super(props);
    }
    _handleClick (){
        console.log('e');
    }
    render() {
        return (<div>
            <Loader ref="loader" mode="wait"/>
            <SimpleButton handleClick={this._handleClick} text="click me"/>
        </div>);
    }
};

ReactDOM.render(<App/>, document.getElementById('playground'));
