import React from 'react'

const ToDoForm = ({title, dueDate, updateTitle, updateDueDate, addToDo}) =>
  <form>
    <div>
      <label>Title</label>
      <input type='text' onChange={updateTitle} value={title} />
    </div>
    <div>
      <label>Due Date</label>
      <input type='date' onChange={updateDueDate} value={dueDate} />
    </div>
    <button type='button' onClick={addToDo}>Submit ToDo</button>
  </form>

export default ToDoForm
