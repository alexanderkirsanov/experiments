import React from 'react';
import TodoItem from './TodoItem';

const MainSection = (props) => {
    const todos = props.todos.map((item)=> {
        return <TodoItem key={ item.id } todo={ item.text }/>
    });
    return (<ul id='todos'>
        { todos }
    </ul>)
};
MainSection.propTypes = {
    todos: React.PropTypes.array.isRequired
};

export default MainSection;