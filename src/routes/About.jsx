import "./About.css";
import img2 from "../images/logo1.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="brief">
      <div id="points">
        <h2> GET TO KNOW ABOUT SIGN IT OUT LOUD</h2>
        <p>
          At [Sign it out loud], we are dedicated to making a positive impact in
          the lives of the deaf and blind community. Our mission is to provide
          comprehensive support, resources, and services to empower individuals
          with sensory impairments to lead fulfilling and independent lives.
        </p>
        <Link to={`explore`}>
          <button id="thatbtn">EXPLORE</button>
        </Link>
      </div>
      <img src={img2} alt="logo1.jpg" id="img12" />
    </section>
  );
}
