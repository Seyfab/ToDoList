import React from 'react'

const Task = () => {
  return (
    <React.Fragment>
        <div className='task'>
            <h3>Task name</h3>
            <p className='task-date'>Date</p>
            <p>Time</p>
            <button>
                Remove 
            </button>
        </div>
    </React.Fragment>
  )
}

export default Task