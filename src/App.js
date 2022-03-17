import React from 'react';
import Main from './Components/Main';
import Welcome from './Components/Welcome';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Routes>
            <Route path="/toDo" element={<Welcome/>}/>
            <Route path="/Task" element={<Main/>}/>
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
