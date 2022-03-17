import React from 'react'
import { TimePickerComponent, DatePickerComponent } from '@syncfusion/ej2-react-calendars'

const SideBar = () => {
    return (
        <React.Fragment>
            <form className='side-bar'>
                <div className='input-container'>
                    <strong>
                        Task title
                    </strong>
                    <input
                        style={{ width: "200px", textAlign: "center" }}
                    />
                </div>
                <div className='input-container'>
                    <strong>
                        Date
                    </strong>
                    <DatePickerComponent

                        style={{ width: "200px", border:"yellow" }}
                    />
                </div>
                <div className='input-container'>
                    <strong>
                        Time
                    </strong>
                    <TimePickerComponent
                        style={{ width: "200px" }}
                    />

                </div>
                <button>
                    Add
                </button>
            </form>
        </React.Fragment>
    )
}

export default SideBar