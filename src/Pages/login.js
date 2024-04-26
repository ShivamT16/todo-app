import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, login } from "../actions"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const handleChange = (e) => {
     const name = e.target.name
     const value = e.target.value
     setUserLogin({...userLogin, [name]:value })
    }

    const handleLoginSubmit = (e) => {
      e.preventDefault()
      console.log(userLogin)

      if (!userLogin.email || !userLogin.password) {
        console.log("Details")
      }
      else{
        const findUser =  user.find((item) => item.email === userLogin.email );
        if (findUser && findUser.password === userLogin.password) {
            dispatch(login(userLogin))
             console.log("Welcome");
             navigate("/", { replace: true })
           } 
           else {
             console.log("Credentials Invalid")
           }
         }
    }

    return(
        <div>
            <h1>Login</h1>
            <form>
            <input type="text" name="email" value={userLogin.email} onChange={handleChange} autoComplete="off" placeholder="Email" />
            <input type="text" name="password" value={userLogin.password} onChange={handleChange} autoComplete="off" placeholder="Password" />
            <button onClick={handleLoginSubmit} >Login</button>
            </form>
            <h3>Don't have an account?</h3>
            <Link to="/signup" >Create an account</Link>
        </div>
    )
} 