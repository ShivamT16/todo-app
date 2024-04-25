const initialState = {
    todo: [],
    user: [],
    loading: false,
    error: null,
    isLoggedIn: false
}

export const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_DATA_LOADING":
         return{
            ...state,
            loading: true
         }
        case "FETCH_TODO_SUCCESS":
         return{
            ...state,
            todo: action.payload,
            loading: false,
            error: null
         }
        case "FETCH_TODO_FAILURE":
         return{
            ...state,
            loading: false,
            error: "Error fetching todo data."
         }
        case "ADD_TODO":
         return{
            ...state,
            todo: [...state.todo, action.payload],
            loading: false,
            error: null
         }
         case "REMOVE_TODO":
         return{
            ...state,
            todo: state.todo.filter((item) => item._id !== action.payload),
            loading: false,
            error: null
         }
         case "ADD_ENTRY_FAILURE":
         return{
            ...state,
            loading: false,
            error: "Error fetching data or performing action"
         }
         case "FETCH_ALL_USERS":
         return{
            ...state,
            user: action.payload ,
            loading:false,
            error:null
         }
         case "FETCH_USERS_FAILURE":
         return{
            ...state,
            loading: false,
            error: "Error fetching users data"
         }
         case "SIGNUP":
         return{
            ...state,
            user:[...state.user, action.payload],
            loading: false,
            error: null,
            isLoggedIn: true
         }
         case "LOGIN":
         return{
            ...state,
            loading: false,
            error: null,
            isLoggedIn: true
         }
         case "LOGOUT":
         return{
            ...state,
            loading: false,
            error: null,
            isLoggedIn: false
         }
         default:
            return state
    }
}