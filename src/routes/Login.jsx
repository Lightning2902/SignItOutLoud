import './Login.css'
import { Link } from 'react-router-dom'
import React,{useState} from "react"
import img from '../images/logo.jpg'


export default function Login(){
    const [ user, setUser] = useState({
	    name: "",
	    password: ""
	})

    const handleChange = e => {
        const { name, value} = e.target
        setUser({
          ...user,
          [name]: value
          })
        }

        // const login = (e) => {
        //     e.preventDefault();
        //     axios.post("http://localhost:9002/login", user)
        //     .then(res => {
        //         alert(res.data.message)
        //         // setLoginUser(res.data.user)
        //         // history.push("/Planetarium")
        //     })
        // }

    return(
        <div id="loginform">
            <form action="/Planetarium" >
                <div id='logintext'>
                <img src={img} alt="logo.png" />
                <p>WELCOME</p>
                </div>
               <div className='logfield'>
                    <input type="text" required name="name" value={user.name} onChange={ handleChange } />
                    <span>Username:</span>
                </div> 
                <div className='logfield'>
                    <input type="password" required name="password" value={user.password} onChange={ handleChange }/>
                    <span>Password:</span> 
                    <div id='forget'><Link to={`/register`}>Forget Password?</Link></div>
                </div>
                <button type="submit" id='submitbtn'>SUBMIT</button>
            </form>
        </div>
    )
}