import { useState } from "react"

export const Signup = () => {
    const [userRegistration, setUserRegistration] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [userRecord, setUserRecord] = useState([]);

    const handleSignupChange = (e) => {
        const name = e.target.name
        const value = e.target.value
    }

    return(
        <div>
            <h1>SignUp</h1>
            <input type="text" name="name" value={userRegistration.name} autoComplete="off" placeholder="Name" />
            <input type="email" name="email" value={userRegistration.email} autoComplete="off" placeholder="Email" />
            <input type="text" name="password" value={userRegistration.password} autoComplete="off" placeholder="Password" />
            <input type="text" name="confirmPassword" value={userRegistration.confirmPassword} autoComplete="off" placeholder="Confirm Password" />
        </div>
    )
}