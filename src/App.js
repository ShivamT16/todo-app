import './App.css';
import { Signup } from './Pages/signup';
import { Todo } from './Pages/todo';

function App() {
  return (
    <div className="App">
      <h1>Todo Application</h1>
      <Todo />
      <Signup />
    </div>
  );
}

export default App;
