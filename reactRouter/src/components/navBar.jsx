import { NavLink } from "react-router-dom";
import './navBar.css';

const NavBar = () => {
    return(
        <nav className="navbar">
            <h1>Camila</h1>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
    )
}

export default NavBar;