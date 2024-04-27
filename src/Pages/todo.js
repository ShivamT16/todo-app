import { useEffect, useState } from "react"
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
    const [filter, setFilter] = useState("")
   
    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch] )

    const todo = filter.length > 0 ? todos.filter((items) => items.title.toLowerCase().includes(filter) || items.description.toLowerCase().includes(filter)) : todos

  return(
    <div> 
        <div className="todo-nav"> 
        <Link className="link" to="/addTodo">New Todo<AddIcon /></Link>
        <input className="search-input" autoComplete="off" type="text" onChange={(e) => setFilter(e.target.value.toLowerCase())} placeholder="Search..." />
        </div>
        <div className="todo-main">
        { 
            todo.map((element) => 
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
        ) }
        </div>
    </div>
  )
}