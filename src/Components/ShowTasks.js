import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'


const ToDoList = () => {
  return (
    <React.Fragment>
      <section className='main-container'>
        <NavBar/>
        Show tasks
        <Footer/>
      </section>
    </React.Fragment>
  )
}

export default ToDoList