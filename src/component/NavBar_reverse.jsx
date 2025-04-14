import { Link, NavLink } from "react-router-dom";
import "./NavBar_reverse.css";

function NavBar_reverse(props) {
    return (
        <header className="heder_reverse">
            <div className="nav-container">
                <nav className="nav">
                    <ul>
                        <li><NavLink to="/">INICIO</NavLink></li>
                        <li><NavLink to="/productos">PRODUCTOS</NavLink></li>
                        <li><NavLink to="/sobrenosotros">SOBRE NOSOTROS</NavLink></li>
                        <li><NavLink to="/brsvetogrther">BRAVE TOGETHER</NavLink></li>
                        {/* <li><NavLink to="/contacto">CONTACTO</NavLink></li> */}
                    </ul>
                </nav>
            </div>
            <div className="logo-container">
                <Link to="/">
                    <img src="/Images/Mask group.png" alt="Logotipo de Maybelline" />
                </Link>
            </div>
        </header>


    );
}

export default NavBar_reverse;