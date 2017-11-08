import React, {Component} from 'react'
import App from './App'

class DataProvider extends Component {
  state = {
    todos: undefined
  }
  componentDidMount () {
    localStorage.setItem('todos', JSON.stringify([{id: 1, title: 'code'}, {id: 2, title: 'more code'}]))
    this.fetchLocalTodos()
  }
  simpleLocalStorageExample = () => {
    localStorage.setItem('name', 'Doug')
    console.log(localStorage.getItem('name'))
    // Also view it @ applicatoin -> storage -> local storage
  }
  objectStorageExample = () => {
    let person = JSON.stringify({name: 'Doug', age: 17})
    localStorage.setItem('me', person)
    console.log(JSON.parse(localStorage.getItem('me')))
  }
  fetchLocalTodos = () => {
    const localTodos = JSON.parse(localStorage.getItem('todos'))
    this.setState({ todos: localTodos })
  }
  render () {
    return this.state.todos
      ? <App todos={this.state.todos} />
      : 'loading'
  }
}

export default DataProvider
