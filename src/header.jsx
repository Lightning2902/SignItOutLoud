import { Link } from "react-router-dom";
import "./header.css";
import logo from "./images/logo.jpg";

export function Header() {
  return (
    <div className="body">
      <div id="header">
        <div id="headtext">
          {/* <img src={logo} alt="logo.jpg" id="logo"/> */}
          <p id="maintext">Sign It Out Loud</p>
          <p id="subtext">For helping to connect</p>
        </div>

        <nav>
          <Link to={`/`}>
            <button className="mainbtn">Home</button>
          </Link>
          <button className="mainbtn">
            Sign Up
            <div className="dropdown">
              <Link to={`login`}>
                <div>Login</div>
              </Link>
              <Link to={`register`}>
                <div>Register</div>
              </Link>
            </div>
          </button>
          <Link to={`About`}>
            <button className="mainbtn">About</button>
          </Link>
          <button className="mainbtn">Feedback</button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
