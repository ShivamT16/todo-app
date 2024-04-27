import { NavLink, Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from './Pages/login';
import { Signup } from './Pages/signup';
import { Todo } from './Pages/todo';
import { useDispatch, useSelector } from 'react-redux';
import { TodoModal } from './Pages/todoModal';
import './App.css';
import { TodoDetail } from './Pages/todoDetail';

function App() {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.isLoggedIn)

  return (
    <div className="App">
      <Router>
        <nav className='nav' >
          <NavLink className='navLink' to="/" >Dashboard</NavLink>
          {status ?
          <NavLink className='navLink' onClick={() => dispatch({type: "LOGOUT" })} >Logout</NavLink>
           : <NavLink className='navLink' to="/login" >Login</NavLink> }
        </nav>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addTodo" element={<TodoModal />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
          <Route path="/editTodo/:id" element={<TodoModal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;