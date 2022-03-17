import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Task from './Task'
import { useNavigate } from 'react-router-dom'
import '/home/ragnar/Web/To Do App/ToDoApp2.0/to-do-app-2.0/src/Style.scss'


const Welcome = () => {

  const navigate = useNavigate();

  const start = (event) => {
    event.preventDefault()
    navigate("/addTask")
  }

  return (
    <React.Fragment>
      <section className='main-container'>
        <NavBar />
        <div className='task-manager'>
          <div className='sideBar-container'>
            <SideBar />
          </div>
          <div className='task-container'>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Welcome