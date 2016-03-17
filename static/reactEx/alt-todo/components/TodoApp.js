import React from 'react';

import TodoStore from '../store/TodoStore';
import TodoActions from '../actions/TodoActions';

import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';

function getTodoState() {
    return {
        allTodos: TodoStore.getState().todos,
        areAnyComplete: TodoStore.areAnyComplete()
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = getTodoState();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        TodoStore.listen(this._onChange);
    }

    componentWillUnmount() {
        TodoStore.unlisten(this._onChange);
    }

    render() {
        return (
            <div className='container'>
                <Header onSave={this._onSave.bind(this)}/>
                <MainSection todos={ this.state.allTodos }/>
                <Footer clearAllCompleted={this._clearAllCompleted.bind(this)}
                        areAnyComplete={ this.state.areAnyComplete }/>
            </div>
        );
    }

    _onSave(newTodo) {
        TodoActions.create(newTodo);
    }

    _onChange() {
        this.setState(getTodoState());
    }

    _clearAllCompleted() {
        TodoActions.clearComplete();
    }
}

export default TodoApp;