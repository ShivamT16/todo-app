import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, login } from "../actions"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./login.css"

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })
    const [show, setShow] = useState(false)

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

      if (!userLogin.email || !userLogin.password) {
        toast.warning("Fill all the details")
      }
      else{
        const findUser =  user.find((item) => item.email === userLogin.email );
        if (findUser && findUser.password === userLogin.password) {
            dispatch(login(userLogin))
             toast.success("Welcome");
             setTimeout(() => {
              navigate("/", { replace: true });
            }, 1000);
           } 
           else {
             toast.error("Credentials Invalid")
           }
         }
    }

    return(
        <div className="login">
            <h1>Login</h1>
            <div className="form" >
            <form>
            <div>
            <input className="input" type="email" name="email" value={userLogin.email} onChange={handleChange} autoComplete="off" placeholder="Email" />
            </div>
            <div>
            <input className="input" type={ show ? "text" : "password" } name="password" value={userLogin.password} onChange={handleChange} autoComplete="off" placeholder="Password" />
            <button type="button" className="show-btn" onClick={() => setShow(!show) } > {show ? "Hide" : "Show"} </button>
            </div>
            <button className="submit-btn" onClick={handleLoginSubmit} >Login</button>
            </form>
            </div>
            <h3>Don't have an account?</h3>
            <Link className="Link" to="/signup" >Create an Account here</Link>
      <ToastContainer autoClose={1000} />
        </div>
    )
} 