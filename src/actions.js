
export const fetchTodo = () => async(dispatch) => {
    try{
        dispatch({type: "FETCH_DATA_LOADING" });
        const response = await fetch("https://todo-app-repl.vercel.app/todo")
        const data = await response.json();
        dispatch({type: "FETCH_TODO_SUCCESS", payload: data })
    }
    catch (error){
        dispatch({type: "FETCH_TODO_FAILURE" })
    }
}

export const addTodo = (newTodo) => async(dispatch) => {
    try{
        const response = await fetch("https://todo-app-repl.vercel.app/todo",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        })
        const data = await response.json()
        if(data){
            dispatch({type: "ADD_TODO", payload: data }) 
        }
    }
    catch (error) {
      dispatch({type: "ADD_ENTRY_FAILURE" })
    }
}

export const removeTodo = (todoId) => async(dispatch) => {
    try{
        const response = await fetch(`https://todo-app-repl.vercel.app/todo/${todoId}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        if(data){
        dispatch({type: "REMOVE_TODO", payload: data._id })
        }
    }
    catch (error) {
        dispatch({type: "ADD_ENTRY_FAILURE" })
    }
}

export const updateTodo = (todo,todoID) => async(dispatch) => {
    console.log(todo)
    try{
        const response = await fetch(`https://todo-app-repl.vercel.app/todo/${todoID}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        const data = await response.json()
        if(data){
        dispatch({type: "UPDATE_TODO", payload: data })
        }
    }
    catch (error) {
        dispatch({type: "ADD_ENTRY_FAILURE" })
    }
}

export const fetchUsers = () => async(dispatch) => {
  try{
    dispatch({type: "FETCH_DATA_LOADING" });
    const response = await fetch("https://todo-app-repl.vercel.app/todo/user")
    const data = await response.json()
    dispatch({ type: "FETCH_ALL_USERS", payload: data })
  }
  catch (error){
     dispatch({type: "FETCH_USERS_FAILURE" })
  }
}

export const signup = (newUser) => async(dispatch) => {
    try{
        const response = await fetch("https://todo-app-repl.vercel.app/signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        const data = await response.json()
        if(data) {
            dispatch({type: "SIGNUP", payload: data })
        }
    }
    catch (error) {
       dispatch({ type: "ADD_ENTRY_FAILURE" })
    } 
} 

export const login = (userLogin) => async(dispatch) => {
    try{
        const response = await fetch("https://todo-app-repl.vercel.app/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userLogin)
        })
        const data = await response.json()
        if(data) {
            dispatch({type:"LOGIN" })
        }
    }
    catch (error){
        dispatch({ type: "ADD_ENTRY_FAILURE" })
    }
}