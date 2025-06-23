import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(props) {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src="\Images\Mask group.png" alt="Logotipo de Maybelline" />
                </Link>
            </div>
            <div className="navbar-container">
            <nav className="navbar">
                <ul>
                <li><NavLink to="/cart"></NavLink> </li>
                    <li><NavLink to="/item"></NavLink></li>
                    <li><NavLink to="/autocuidado"></NavLink></li>
                    <li><NavLink to="/">INICIO</NavLink></li>
                    <li><NavLink to="/productos">PRODUCTOS</NavLink></li>
                    <li><NavLink to="/sobrenosotros">SOBRE NOSOTROS </NavLink></li>
                    <li><NavLink to="/bravetogrther">BRAVE TOGETHER</NavLink></li>
                </ul>
            </nav></div>
        </header>
    );
}

export default NavBar;