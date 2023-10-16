import './Navbar.css'
import Header from '../header'
import { Outlet } from 'react-router-dom'

function Navbar() {
  
  return(
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Navbar