import React, {Component} from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

class ToDoContainer extends Component {
  state = {
    toDos: [],
    title: undefined,
    dueDate: undefined
  }
  addToDo = () => {
    let allToDos = this.state.toDos
    let newToDo = {
      title: this.state.title,
      complete: false,
      dueDate: this.state.dueDate
    }
    allToDos.push(newToDo)
    this.setState({ toDos: allToDos })
    alert('todo succesfully added')
    this.setState({ title: '', dueDate: '' })
  }
  updateTitle = (e) => this.setState({ title: e.target.value })
  updateDueDate = (e) => this.setState({ dueDate: e.target.value })

  render () {
    return (
      <div>
        <h1> New ToDo Form </h1>
        <h3> Completed ToDos </h3>
        <ToDoForm
          title={this.state.title}
          dueDate={this.state.dueDate}
          addToDo={this.addToDo}
          updateTitle={this.updateTitle}
          updateDueDate={this.updateDueDate}
        />
        <ToDoList toDos={this.state.toDos} />
      </div>
    )
  }
}

export default ToDoContainer
