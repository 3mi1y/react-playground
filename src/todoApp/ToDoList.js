import React from 'react'
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = ({toDos}) =>
  <div>
    {
      toDos.length > 0
        ? toDos.map(item =>
          <ToDo key={item.id} title={item.title} complete={item.complete} dueDate={item.dueDate} />
        )
        : <h3> No To Dos'</h3>
    }
  </div>

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired
}

export default ToDoList
