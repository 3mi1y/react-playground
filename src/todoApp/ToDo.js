import React from 'react'

const ToDo = ({title, dueDate, complete, id, toggleTodoCompletion}) =>
  <div>
    <h3> {title} </h3>
    <p> {dueDate}</p>
    <p> complete: {complete.toString()} </p>
    <button id={id} onClick={toggleTodoCompletion}> {complete ? 'mark incomplete' : 'mark complete'} </button>
  </div>

export default ToDo
