import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodo, removeTodo } from "../actions"
import { Link } from "react-router-dom";

export const Todo = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo)
   
    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch] )

  return(
    <div>  
        <Link to="/addTodo" ><button>Add Todo</button></Link>
        {
            todos.map((element) => 
                <div key={element._id}>
                {element.title} : {element.description} : {element.status}
                <button onClick={()=> dispatch(removeTodo(element._id)) } >Remove</button>
                <Link to={`/editTodo/${element._id}`} >
                <button>Edit</button>
                </Link>
                </div>
        )}
    </div>
  )
}