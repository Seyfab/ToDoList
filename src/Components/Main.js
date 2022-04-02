import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Task from './Task'
import '/home/ragnar/Web/To Do App/ToDoApp2.0/to-do-app-2.0/src/Style.scss'
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';


const Welcome = () => {

  const [value, setValue] = useState({
    date: "2022-01-01",
    time: "00:00",
    taskName: "",
    tasks: JSON.parse(localStorage.getItem("tasks")),
    id: 0
  })

  useEffect(() => {
    const t = value.tasks
    if (t.length !== 0 ) {
      const l = t.length
      const idd = value.tasks[l - 1].id
      setValue((prevState) => {
        return {
          ...prevState,
          id: idd + 1
        }
      })
      console.log("the value of l is " + l)
    }
    else {
      setValue((prevState) => {
        return {
          ...prevState,
          id: 0
        }
      })
    }
  }, [])

  const addTask = (event) => {
    event.preventDefault();
    if (value.taskName !== "") {
      const newTasks = value.tasks
      const task = {
        taskName: value.taskName,
        taskDate: value.date,
        taskTime: value.time,
        completed: false,
        id: value.id
      }
      newTasks.push(task)
      setValue((prevState => {
        return {
          date: "",
          time: "",
          taskName: "",
          tasks: newTasks,
          id: prevState.id + 1
        }
      }))
      localStorage.setItem("tasks", JSON.stringify(value.tasks))
    }
    else {
      alert("Missing information !!\nPlease enter the task name")
    }

  }

  const newTime = (event) => {
    setValue((prevState => {
      return {
        ...prevState,
        time: event.format("LT")
      }
    }))
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValue((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const done = (id) => {
    const newArr = value.tasks.map(n => {
      if (id === n.id) {
        n.completed = !n.completed
      }
      return n
    })
    setValue((prevState) => {
      return {
        ...prevState,
        tasks: newArr
      }
    })
    localStorage.setItem("tasks", JSON.stringify(value.tasks))
  }

  const removeTask = (id) => {
    var afterDelete = value.tasks
    afterDelete = value.tasks.filter(n => n.id !== id)
    localStorage.setItem("tasks", JSON.stringify(afterDelete))
    setValue((prevState) => {
      return {
        ...prevState,
        tasks: afterDelete
      }
    })

  }



  const arr = value.tasks.map(n => {
    return <Task
      key={n.id}
      n={n}
      done={done}
      removeTask={removeTask}
    />
  })
  return (
    <React.Fragment>
      <section className='main-container'>
        <NavBar />
        <div className='task-manager'>
          <div className='sideBar-container'>
            <form className='side-bar' onSubmit={addTask}>
              <div className='input-container'>
                <strong>
                  Task title
                </strong>
                <input
                  type="text"
                  name="taskName"
                  maxLength="12"
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
                  className='time-picker'
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
          </div>
          <div className='task-container'>
            {arr}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Welcome