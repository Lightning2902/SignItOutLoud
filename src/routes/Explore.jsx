import "./explore.css";
import { Link } from "react-router-dom";
import image1 from "../images/blind.jpg";
import image2 from "../images/deaf.jpg";

export default function Explore() {
  return (
    <section id="big">
      <div className="div1">
        <img src={image1} alt="logo2.jpg" id="image1" />

        <div id="words">
          <h2 id="title1">BRAILLE LANGUAGE</h2>
          <p>HELPS CONVERT BRAILLE INTO</p>
          <p id="change">ENGLISH AUDIO FILE</p>
          <Link to={`FileUpload`}>
            <button id="justbtn">CONVERT</button>
          </Link>
        </div>
      </div>

      <div id="div2">
        <img src={image2} alt="logo2.jpg" id="image2" />

        <div id="words">
          <h2 id="title2">HELPING DEAF AND DUMB PEOPLE</h2>
          <p>HELPS UNDERSTAND SIGN LANGUAGES</p>
          <p id="change">FOR EASIER COMMUNICATION</p>
          <Link to={`Camera`}>
            <button id="justbtn2">SCAN</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
