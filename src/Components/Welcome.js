import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  const [value, setValue] = useState({
    tasks: [{ id:0, taskName: "toDoList", taskDate: "2022-01-01", taskTime: "00:00", completed: false }]
  })

  const navigate = useNavigate()

  const start = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify(value.tasks))
    }
    navigate("/Task")
  }

  return (
    <React.Fragment>
      <div className='main-container'>
        <NavBar />
        <div className='welcome'>
          <h3>Welcome to 'To Do List'</h3>
          <p>This website is created with react.js for learning purposes, Here you can manage your
            tasks by adding, remove and check the task if it's done.
          </p>
          <button onClick={start}>
            Start
          </button>
        </div>
        <Footer />
      </div>

    </React.Fragment>
  )
}

export default Welcome