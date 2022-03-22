import React from 'react'
import { useState } from 'react'
import TimePicker from 'react-time-picker'

const SideBar = () => {

    const [value, setValue] = useState({
        date: "",
        time: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setValue((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
 
    return (
        <React.Fragment>
            <form className='side-bar'>
                <div className='input-container'>
                    <strong>
                        Task title
                    </strong>
                    <input
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div className='input-container'>
                    <strong>
                        Date
                    </strong>
                    <input
                        type="date"
                        name="date"
                        value={value.date}
                        onChange={handleChange}
                    />
                </div>
                <div className='input-container'>
                    <strong>
                        Time
                    </strong>
                    <input
                        type="time"
                        name="time"
                        value={value.time}
                        onChange={handleChange}
                    />
                </div>
                <button>
                    Add
                </button>
            </form>
            <div>
                <p>this is the date {value.date}</p>
                <p>this is the time {value.time}</p>
            </div>
        </React.Fragment>
    )
}

export default SideBar