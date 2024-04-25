import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, fetchTodo, removeTodo } from "../actions"

export const Todo = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo)
    const [newTodo,setNewTodo] = useState({
        title: "",
        description: "",
        status: "",
    }) 

    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch] )

    const handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      setNewTodo({...newTodo, [name]:value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(newTodo))
        setNewTodo({
            title: "",
            description: "",
            status: "",
        }) 
    }

  return(
    <div>  
        <div>
            <form>
            Title: <input type="text" name="title" value={newTodo.title} autoComplete="off" onChange={handleChange} />
            Description: <input type="text" name="description" value={newTodo.description} autoComplete="off" onChange={handleChange} />
            Status:
            <select name="status" onChange={handleChange} >
                <option >Status</option>
                <option value="true" >Completed</option>
                <option value="false" >Not Completed</option>
            </select>
            <button onClick={handleSubmit} >Add Todo</button>
            </form>   

        </div>
        {
            todos.map((element) => 
                <div key={element._id}>
                {element.title} : {element.description} : {element.status}
                <button onClick={()=> dispatch(removeTodo(element._id)) } >Remove</button>
                </div>
        )}
    </div>
  )
}