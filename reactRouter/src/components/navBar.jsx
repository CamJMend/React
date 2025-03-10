import { NavLink } from "react-router-dom";
import './navBar.css';

const NavBar = () => {
    return(
        <nav className="navbar">
            <h1>Camila</h1>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/validation">Validar Tarjeta</NavLink>
            <NavLink to="/words">Lista de palabras</NavLink>
            <NavLink to="/weather">Clima</NavLink>
        </nav>
    )
}

export default NavBar;