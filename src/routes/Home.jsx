import './Home1.css'
import { Link } from 'react-router-dom'
import img1 from '../images/logo2.jpg'


export default function Home() {
    return(
      <section id="details">
      
      <img src={img1} alt="logo2.jpg" id="img11s"/>
      
        <div id='contents'>
          <h2>WELCOME TO SIGN IT OUT LOUD</h2>
          <p>LET US HELP YOU CONNECT BETTER</p>
          <Link to={`Explore`}><button id="thisbtns">EXPLORE</button></Link>
          
        </div>
        
      </section>
    )
    }

