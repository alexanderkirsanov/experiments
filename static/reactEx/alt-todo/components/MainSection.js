import {PropTypes} from 'react';
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
    todos: PropTypes.object.isRequired
};

export default MainSection;