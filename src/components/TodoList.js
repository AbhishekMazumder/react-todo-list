import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <h1>
                Hello from TodoList
                <TodoItem />
            </h1>
        )
    }
}

export default TodoList;

