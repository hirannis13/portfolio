import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <section className="nav">
            <NavLink className="homeBtn" to="/home" >
            <img className="homeBttns" src="image/homebtn.webp" alt="homebuttonastronaut"/>
            </NavLink>
            <div className="navText">
            <NavLink to="/projects" >Projects</NavLink>
            <NavLink to="/about" >Know More</NavLink>
            </div>
            </section>
            <div className="contact">
            <a href="mailto:keczodori2@gmail.com"><img src="image/contact.webp" alt="logocontact"/></a>
            </div>
        </nav>
    );
}
