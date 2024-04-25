import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, signup } from "../actions"

export const Signup = () => {
    const dispatch = useDispatch()
    const users = useSelector((state)=> state.user)
    const status = useSelector((state) => state.isLoggedIn)
    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    console.log(status)

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
                } else {
                  console.log("Passwords don't match");
                }
              }
            }
    }

    return(
        <div>
            <h1>SignUp</h1>
            <form>
            <input type="text" name="username" value={userRegistration.username} onChange={handleSignupChange} autoComplete="off" placeholder="Name" />
            <input type="email" name="email" value={userRegistration.email} onChange={handleSignupChange} autoComplete="off" placeholder="Email" />
            <input type="text" name="password" value={userRegistration.password} onChange={handleSignupChange} autoComplete="off" placeholder="Password" />
            <input type="text" name="confirmPassword" value={userRegistration.confirmPassword} onChange={handleSignupChange} autoComplete="off" placeholder="Confirm Password" />
            <button onClick={handleSignupSubmit} >SignUp</button>
            </form>
            <button onClick={() => dispatch({type: "LOGOUT" }) } >Logout</button>
        </div>
    )
}