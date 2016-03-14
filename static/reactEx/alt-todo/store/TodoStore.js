import alt from '../alt';
import merge from 'object-assign';

import TodoActions from '../actions/TodoActions';

class TodoStore {
    constructor() {
        this.bindActions(TodoActions);

        this.todos = [];
    }

    update(id, update) {
        const todo = this.todos.filter(todo => todo.id === id);
        if (todo) {
            merge(todo, update);
        } else {
            this.todos.push(update);
        }
    }

    onCreate(text) {
        text = text.trim();
        if (text === '') {
            return false
        }
        const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        this.todos.push({
            id: id,
            complete: false,
            text: text
        });
    }

    onToggleComplete(id) {
        const complete = this.todos.filter(todo => (todo.id === id  && todo.complete));
        this.update(id, {complete});
    }

    onClearComplete() {
        this.todos = this.todos.filter(todo=>todo.complete)
    }

    static areAnyComplete() {
        const {todos} = this.getState();
        return todos.some(todo=>todo.complete)
    }
}

export default alt.createStore(TodoStore);