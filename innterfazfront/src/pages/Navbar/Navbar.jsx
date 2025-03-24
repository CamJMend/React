import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-contenedor">
                <NavLink to="/" className="nav-link">Inicio</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;