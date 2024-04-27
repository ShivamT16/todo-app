import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodo, removeTodo } from "../actions"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link } from "react-router-dom";
import "./todo.css"

export const Todo = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo)
   
    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch] )

  return(
    <div>  
        <Link className="link" to="/addTodo">New Todo<AddIcon /></Link>
        <div className="todo-main">
        {
            todos.map((element) => 
                <div className="todo-list" key={element._id}>
                <Link className="todo-link" to={`/todo/${element._id}`} >
                <p className="title">{element.title}</p>
                <p className="description" >{element.description}</p>
                <p style={{color: element.status === "Completed" ? "green" : "red"  }} >{element.status}</p>
                </Link>
                <div className="btn"> 
                <p onClick={()=> dispatch(removeTodo(element._id)) } > <DeleteIcon fontSize="small" /> </p>
                <Link to={`/editTodo/${element._id}`} > <EditNoteIcon /> </Link>
                </div>
                </div>
        )}
        </div>
    </div>
  )
}