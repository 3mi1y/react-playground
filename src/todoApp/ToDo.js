import React from 'react'

const ToDo = ({title, dueDate, complete}) =>
  <div>
    <h3> {title} </h3>
    <p> {dueDate}</p>
    <p> complete: {complete.toString()} </p>
  </div>

export default ToDo
