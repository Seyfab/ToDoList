import React from 'react'
import { FaCirclePlus } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <React.Fragment>
            <nav className='nav-bar'>
                <label className='logo'>
                    <Link to="/toDoList">ToDo</Link>
                </label>
                <ul>
                    <li><Link to="/toDoList"><i class="fa fa-home" aria-hidden="true"></i>
                        Home</Link></li>
                    <li><Link to="/addTask"><i class="fa fa-plus-circle" aria-hidden="true"></i>
                        Add-Task</Link></li>
                    <li><Link to="/showTasks"><i class="fa fa-list" aria-hidden="true"></i>
                        Show-Tasks</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default NavBar