import React, { Component } from 'react'
import uuid from 'uuid';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <TodoInput />
        <TodoList />
      </div>
    )
  }
}
