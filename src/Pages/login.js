import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../actions"

export const Login = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
     const name = e.target.name
     const value = e.target.value
     setUserLogin({...userLogin, [name]:value })
    }

    const handleLoginSubmit = (e) => {
      e.preventDefault()

      if (!userLogin.email || !userLogin.password) {
        console.log("Details")
      }
      else{
        const findUser =  user.find((item) => item.email === userLogin.email );
        if (findUser && findUser.password === userLogin.password) {
            dispatch(login(userLogin))
             console.log("Welcome");
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
        </div>
    )
} 