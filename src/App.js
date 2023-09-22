
import Posts from "./Posts";
import Users from './Users';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Users />}></Route>
      <Route path="/posts" element={<Posts />}> </Route>
    </Routes>
  </Router> 
    );
}

export default App;
