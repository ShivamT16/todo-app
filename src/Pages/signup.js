import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { fetchUsers, signup } from "../actions"
import "./login.css"

export const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector((state)=> state.user)
    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [show, setShow] = useState(false)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const handleSignupChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserRegistration({...userRegistration, [name]: value})
    }

    const handleSignupSubmit = (e) => {
        e.preventDefault()
    if ( !userRegistration.username ||
         !userRegistration.email ||
         !userRegistration.password ||
         !userRegistration.confirmPassword
        ) {
         console.log("Please fill all the details");
          } 
          else 
          {
           const findUser =  users.find((item) => item.email === userRegistration.email || item.username === userRegistration.username );
           if (findUser) {
                console.log("Email or Username already exist");
              } else {
                if (userRegistration.password === userRegistration.confirmPassword) {
                  console.log(userRegistration);
                  dispatch(signup(userRegistration))
                  navigate("/", { replace: true })
                } else {
                  console.log("Passwords don't match");
                }
              }
            }
    }

    return(
        <div className="login">
            <h1>SignUp</h1>
            <form>
            <input className="input" type="text" name="username" value={userRegistration.username} onChange={handleSignupChange} autoComplete="off" placeholder="Name" />
            <input className="input" type="email" name="email" value={userRegistration.email} onChange={handleSignupChange} autoComplete="off" placeholder="Email" />
            <input className="input" type="text" name="password" value={userRegistration.password} onChange={handleSignupChange} autoComplete="off" placeholder="Password" />
            <input className="input" type={ show ? "text" : "password" } name="confirmPassword" value={userRegistration.confirmPassword} onChange={handleSignupChange} autoComplete="off" placeholder="Confirm Password" />
            <button type="button" className="show-btn" onClick={() => setShow(!show) } > {show ? "Hide" : "Show"} </button>
            <div>
            <button className="submit-btn" onClick={handleSignupSubmit} >SignUp</button>
            </div>
            </form>
            <h3>Already Have an account? </h3>
            <Link className="Link" to="/login" >Click here to Login</Link>

        </div>
    )
}