
import './App.css';
import Users from './Users';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Users />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
