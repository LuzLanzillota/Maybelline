import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
// import CartWidget from "./CartWidget";

function NavBar(props) {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src=".\public\Images\Mask group.png" alt="Logotipo de Maybelline" />
                </Link>
            </div>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/">INICIO</NavLink></li>
                    <li><NavLink to="/productos">PRODUCTOS</NavLink></li>
                    <li><NavLink to="/sobrenosotros">SOBRE NOSOTROS </NavLink></li>
                    <li><NavLink to="/brsvetogrther">BRAVE TOGETHER</NavLink></li>
                    {/* <li><NavLink to="/contacto">CONTACTO</NavLink></li> */}
                    <li><NavLink to="/cart"></NavLink> </li>
                    <li><NavLink to="/item"></NavLink></li>
                </ul>
            </nav>
            {/* <CartWidget /> */}
        </header>
    );
}

export default NavBar;