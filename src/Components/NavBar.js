import React from 'react'
import { Link } from 'react-router-dom'
import {HiClipboardList} from "react-icons/hi"

const NavBar = () => {
    return (
        <React.Fragment>
            <nav className='nav-bar'>
                <label className='logo-label'>
                <h3><Link to="/toDoList" className='logo'> <HiClipboardList style={{fontSize:"0.7em", margin:"0px"}}/> ToDo</Link> </h3>
                </label>
            </nav>
        </React.Fragment>
    )
}

export default NavBar