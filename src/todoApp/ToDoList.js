import React from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = ({todos}) =>
  <div>
    {
      todos.map(item =>
        <ToDo key={item.id} title={item.title} />
      )
    }
  </div>

ToDoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default ToDoList
