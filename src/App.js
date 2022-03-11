import React from 'react';
import Welcome from './Components/Welcome';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddTask  from './Components/AddTask';
import ShowTasks from './Components/ShowTasks'

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Routes>
            <Route path="/toDoList" element={<Welcome/>}/>
            <Route path="/addTask" element={<AddTask/>}/>
            <Route path="/showTasks" element={<ShowTasks/>}/>
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
