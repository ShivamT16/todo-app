import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodo, removeTodo } from "../actions"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./todo.css"

export const Todo = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo)
    const [filter, setFilter] = useState("");
    const [drag, setDrag] = useState(false)

    const todo = filter.length > 0 ? todos.filter((items) => items.title.toLowerCase().includes(filter) || items.description.toLowerCase().includes(filter)) : todos
    const [list, setList] = useState("")
    
    useEffect(() => {
      dispatch(fetchTodo());
  }, [dispatch] )
  
  const todoList = list ? list : todo

  const dragTodo = useRef()
  const draggedOverTodo = useRef()

  function dropTodo() {
    const newListItem = [...list]
    const temp = newListItem[dragTodo.current]
    newListItem[dragTodo.current] = newListItem[draggedOverTodo.current]
    newListItem[draggedOverTodo.current] = temp
    setList(newListItem)
  }

      return(
        <div> 
        <div className="todo-nav"> 
        <Link className="link" to="/addTodo">New Todo<AddIcon /></Link>
        <input className="search-input" autoComplete="off" type="text" onChange={(e) => setFilter(e.target.value.toLowerCase())} placeholder="Search..." />
        <Link className="link" onClick={() => {setList(todo); setDrag(!drag)}} >Drag n Drop</Link>
        </div>
        <div className="todo-main" >

          {todoList.length ?
            todoList.map((element, index) => 
                <div className="todo-list" key={element._id} 
                draggable 
                onDragStart={() => {(dragTodo.current = index)}}
                onDragEnter={() => (draggedOverTodo.current = index)}
                onDragEnd={dropTodo}
                onDragOver={(e) => e.preventDefault()} >

                {drag && <p className="dragDrop">📌</p>}

                <div>
                <p className="title">{element.title}</p>
                <p className="description" >{element.description}</p>
                <p style={{color: element.status === "Completed" ? "green" : "red"  }} >{element.status}</p>
                </div>
                <div className="btn"> 
                <p onClick={()=> {dispatch(removeTodo(element._id)); toast.error("Todo Removed")} } > <DeleteIcon fontSize="small" /> </p>
                <Link to={`/editTodo/${element._id}`} > <EditNoteIcon /> </Link>
                <Link className="todo-link" to={`/todo/${element._id}`} >Details...</Link>
                </div>
                </div>
        ) : <h2>No Todos found</h2> }
        </div>
        <ToastContainer autoClose={1000} />
    </div>
  )
}