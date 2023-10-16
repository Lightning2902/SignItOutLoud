import './Register.css'
import { Form } from 'react-router-dom'
import React,{ useState } from "react"
import img from '../images/logo.jpg'
// import axios from "axios"

export default function Register(){
    const [ user, setUser] = useState({
        name: "",
        email: '',
        password: '',
        reEnterPassword: ''
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    // const register = (e) =>{
    //     e.preventDefault();
    //     const { name, email, password, reEnterPassword } = user
    //     try {
    //         if( name && email && password && (password === reEnterPassword)){
    //             axios.post("http://localhost:9002/register", user)
    //             .then( res => {alert(res.data.message)})
    //         } 
    //     } catch (error) {
    //         console.warn(error);
    //     }
         
        
    // }

    return(
        <div id='registerform'>
            <form method="post">
                <div id='registertext'>
                    <p>Register Here</p>
                    <img src={img} alt="register.png" />
                </div>
                <div className='field'>
                    <input type="text" required name="email" value={user.email} onChange={ handleChange } />
                    <span>Email:</span>
                </div>
                <div className='field'>
                    <input type="text" required name="name" value={user.name} onChange={ handleChange } />
                    <span>Username:</span>
                </div>
                <div className='field'>
                    <input type="password" required name="password" value={user.password} onChange={ handleChange } />
                    <span>Password:</span>
                </div>
                <div className='field'>
                    <input type="password" required name="reEnterPassword" value={user.reEnterPassword} onChange={ handleChange } />
                    <span>Re-type Password:</span>
                </div>
                <button type="submit" id='registerbtn'>Register</button>
            </form> 
        </div>
    )
}