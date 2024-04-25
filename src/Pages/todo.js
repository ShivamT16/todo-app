import { useState } from "react"

export const Todo = () => {
    const [newTodo,setNewTodo] = useState({
        title: "",
        description: "",
        status: "",
    }) 
    const [todos, setTodos] = useState([])

    const handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      setNewTodo({...newTodo, [name]:value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setTodos([...todos, newTodo])
    }

  return(
    <div>  
        <div>
            <form>
            Title: <input type="text" name="title" value={newTodo.title} onChange={handleChange} />
            Description: <input type="text" name="description" value={newTodo.description} onChange={handleChange} />
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
                <div>
                {element.title} : {element.description} : {element.status}
                </div>
        )
        }
    </div>
  )
}