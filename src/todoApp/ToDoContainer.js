import React, {Component} from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

const styles = {
  listContainer: {
    display: 'flex'
  }
}

class ToDoContainer extends Component {
  state = {
    toDos: [],
    title: undefined,
    dueDate: undefined,
    completedToDos: [],
    incompleteToDos: []
  }
  addToDo = () => {
    let allToDos = this.state.toDos
    let newToDo = {
      title: this.state.title,
      complete: false,
      dueDate: this.state.dueDate,
      id: this.state.toDos.length + 1
    }
    allToDos.push(newToDo)
    this.setState({ toDos: allToDos })
    alert('todo succesfully added')
    this.setState({ title: '', dueDate: '' })
    this.filterToDosByCompletion()
  }

  updateTitle = (e) => this.setState({ title: e.target.value })
  updateDueDate = (e) => this.setState({ dueDate: e.target.value })

  toggleTodoCompletion = (e) => {
    // we have attached the ID of the todo, to the id of the button.
    // we can easily use the id to find the exact todo we are looking for
    // update it's completion status
    // and recall our filterToDosByCompletion
    console.log(e.target.id, 'NEW TODO ID')
    // We could use `filter` but that would return an array of only one item.
    // Find is like filter but returns the actual item that meets the condition.
    const toDo = this.state.toDos.find(item => Number(item.id) === Number(e.target.id))
    console.log(toDo)
    toDo.complete = !toDo.complete
    this.filterToDosByCompletion()
  }

  filterToDosByCompletion = () => {
    const completed = this.state.toDos.filter(item =>
      item.complete // same as item.complete === true
    )
    const incomplete = this.state.toDos.filter(item =>
      !item.complete // same as item.complete === false
    )
    this.setState({ completedToDos: completed, incompleteToDos: incomplete })
  }

  render () {
    return (
      <div>
        <ToDoForm
          title={this.state.title}
          dueDate={this.state.dueDate}
          addToDo={this.addToDo}
          updateTitle={this.updateTitle}
          updateDueDate={this.updateDueDate}
        />
        <div style={styles.listContainer}>
          <ToDoList title={'Incomplete ToDos'} toDos={this.state.incompleteToDos} toggleTodoCompletion={this.toggleTodoCompletion} />
          <ToDoList title={'Complete ToDos'} toDos={this.state.completedToDos} toggleTodoCompletion={this.toggleTodoCompletion} />
        </div>
      </div>
    )
  }
}

export default ToDoContainer
