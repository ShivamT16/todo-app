
export const fetchTodo = () => async(dispatch) => {
    try{
        dispatch({type: "FETCH_DATA_LOADING" });
        const response = await fetch("https://4faeaade-ef97-42d2-b4c4-4853f6d8d900-00-2ndp2j5mks2nu.kirk.replit.dev/todo")
        const data = await response.json();
        dispatch({type: "FETCH_TODO_SUCCESS", payload: data })
    }
    catch (error){
        dispatch({type: "FETCH_TODO_FAILURE" })
    }
}

export const addTodo = (newTodo) => async(dispatch) => {
    try{
        const response = await fetch("https://4faeaade-ef97-42d2-b4c4-4853f6d8d900-00-2ndp2j5mks2nu.kirk.replit.dev/todo",{
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
        const response = await fetch(`https://4faeaade-ef97-42d2-b4c4-4853f6d8d900-00-2ndp2j5mks2nu.kirk.replit.dev/todo/${todoId}`,{
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

export const fetchUsers = () => async(dispatch) => {
  try{
    dispatch({type: "FETCH_DATA_LOADING" });
    const response = await fetch("https://4faeaade-ef97-42d2-b4c4-4853f6d8d900-00-2ndp2j5mks2nu.kirk.replit.dev/todo/user")
    const data = await response.json()
    dispatch({ type: "FETCH_ALL_USERS", payload: data })
  }
  catch (error){
     dispatch({type: "FETCH_USERS_FAILURE" })
  }
}

export const signup = (newUser) => async(dispatch) => {
    try{
        const response = await fetch("https://4faeaade-ef97-42d2-b4c4-4853f6d8d900-00-2ndp2j5mks2nu.kirk.replit.dev/signin", {
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
        const response = await fetch("https://4faeaade-ef97-42d2-b4c4-4853f6d8d900-00-2ndp2j5mks2nu.kirk.replit.dev/login", {
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