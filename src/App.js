import './App.css';
import { Login } from './Pages/login';
import { Signup } from './Pages/signup';
import { Todo } from './Pages/todo';

function App() {
  return (
    <div className="App">
      <h1>Todo Application</h1>
      <Todo />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
