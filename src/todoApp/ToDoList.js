import React from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = ({toDos, toggleTodoCompletion}) =>
  <div>
    {
      toDos.length > 0
        ? toDos.map(item =>
          <ToDo key={item.id} id={item.id} title={item.title} complete={item.complete} dueDate={item.dueDate} toggleTodoCompletion={toggleTodoCompletion} />
        )
        : <h3> --- </h3>
    }
  </div>

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired
}

export default ToDoList
