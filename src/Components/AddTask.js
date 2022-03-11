import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const AddTask = () => {
    return (
        <React.Fragment>
            <section className='main-container'>
            <NavBar/>
            <form className='task-form'>
                 <label>
                     Task
                 </label>
                 <input
                    type="text"
                 />
                 <label>
                     Time
                 </label>
                 <input
                    type="time"
                 />
                 <label>
                     Date
                 </label>
                 <input
                    type="date"
                 />
             </form>
            <Footer/>
            </section>
            
        </React.Fragment>
    )
}

export default AddTask
