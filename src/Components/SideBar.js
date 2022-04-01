import React from 'react'
import { useState } from 'react'
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';


const SideBar = (props) => {

    const [value, setValue] = useState({
    date: "2022-01-01",
    time: "00:00",
    taskName: "",
        tasks: JSON.parse(localStorage.getItem("tasks"))
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setValue((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const newTime = (event) => {
        setValue((prevState => {
            return {
                ...prevState,
                time: event.format("LT")
            }
        }))
    }

    // const addTask = (event) => {
    //     event.preventDefault();
    //     const newTasks = value.tasks
    //     const task = {
    //         taskName: value.taskName,
    //         taskDate: value.date,
    //         taskTime: value.time,
    //         completed: false
    //     }
    //     newTasks.push(task)
    //     console.log(newTasks)
    //     setValue((prevState => {
    //         return {
    //             ...prevState,
    //             tasks: newTasks
    //         }
    //     }))
    //     console.log(value.tasks)
    //     localStorage.setItem("tasks", JSON.stringify(value.tasks))
    // }

    return (
        <React.Fragment>
            <form className='side-bar' onSubmit={props.add}>
                <div className='input-container'>
                    <strong>
                        Task title
                    </strong>
                    <input
                        type="text"
                        name="taskName"
                        value={value.taskName}
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
                    <TimePicker
                        placeholder="Select Time"
                        use12Hours
                        showSecond={false}
                        focusOnOpen={true}
                        format="hh:mm A"
                        onChange={newTime}
                    />
                </div>
                <button>
                    Add
                </button>
            </form>
            <div>
                <p>this is the task name {value.taskName}</p>
                <p>this is the date {value.date}</p>
                <p>this is the time {value.time}</p>
                <p>this is all tasks {value.tasks.map(n => {return <li>{n.taskName}</li>})}</p>
            </div>
        </React.Fragment>
    )
}

export default SideBar