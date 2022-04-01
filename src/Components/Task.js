import React from 'react'

const Task = (props) => {

  const completedStyle = {
    fontStyle: "italic",
    color: "#737373",
    textDecoration: "line-through"
}

  return (
    <React.Fragment>
      <div className='task'>
        <h3 className='task-title' style={props.n.completed ? completedStyle : null}>{props.n.taskName}</h3>
        <p className='task-date'>Date: {props.n.taskDate}</p>
        <p>Time: {props.n.taskTime}</p>
        <div className='done-input'>
          <input
            type="checkbox"
            checked={props.n.completed}
            onChange={() => props.done(props.n.id)}
          />
          <label>
            Done
          </label>
        </div>
        <button onClick={() => props.removeTask(props.n.id)} className='remove-button'>
          Remove
        </button>
      </div>
    </React.Fragment>
  )
}

export default Task