import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import ToDoList from './ShowTasks'
import '/home/ragnar/Web/To Do App/ToDoApp2.0/to-do-app-2.0/src/Style.scss'

const Welcome = () => {
  return (
    <React.Fragment>
      <section className='main-container'>
        <NavBar/>
        <section className='welcome-section'>
          <h3>Welcome to 'To Do List'</h3>
          <p>This website created with react.js for learning purposes</p>
          <p>Here We can create a list of tasks and easily manage it by adding titles, dates and times for every task</p>
          <p>We can also delete, add and also check if the taks is done</p>
        </section>
        <Footer/>
      </section>
    </React.Fragment>
  )
}

export default Welcome