import React, {Component} from 'react'
import App from './App'

// Local storage examples almost in place.

class DataProvider extends Component {
  state = {
    todos: undefined
  }
  componentDidMount () {
    localStorage.setItem('todos', JSON.stringify([{id: 1, title: 'code'}, {id: 2, title: 'more code'}]))
    this.fetchLocalTodos()
  }
  fetchLocalTodos = () => {
    const localTodos = JSON.parse(localStorage.getItem('todos'))
    this.setState({ todos: localTodos })
  }
  addToDo = () => {
    const allTodos = this.state.todos
    const newId = allTodos.length + 1
    allTodos.push({id: newId, title: 'SUPER TEST'})
  }
  removeTodo = (id) => {
    const allTodos = this.state.todos
    const filteredTodos = allTodos.map(todo =>
      todo.id !== id
    )
    localStorage.setItem('todos', filteredTodos)
  }
  render () {
    return this.state.todos
      ? <App todos={this.state.todos} />
      : 'loading'
  }
}

export default DataProvider
