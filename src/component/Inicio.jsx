import { NavLink } from "react-router-dom";
import Button from "./Button";
import Footer from "./Footer";
import "./Inicio.css";
import NavBar_reverse from "./NavBar_reverse";

function Inicio() {
    return (
        <div>
            <div className="imagen-1">
                <img src="/Images/Anuncio_Inicio.png" alt="imagen de inicio" />
                <div>
                    <div className="ver-producto">
                        <img src="./public/Images/ver-producto.png" alt="boton" />
                    </div>
                </div>
            </div>
            <div className="imagen-2">
                <img src="./public/Images/TodoSobreMaybelline_Inicio.jpg" alt="Todo sobre maybelline" />

                <div className="mas-sobre-nosotros">
                    <NavLink to="/sobrenosotros"> <img src="./public/Images/mas-sobre-nosotros.png" alt="" /></NavLink>
                </div>
            </div>
            <div className="imagen-3">
                <h1>ANIMATE A PROBAR NUESTROS NUEVOS PRODUCTOS Y EXPLORAR LOS LOOKS EN TENDENCIA!</h1>
                <img src="./public/Images/productos_inicio.png" alt="" />
                <div className="boton">
                <NavLink to="/productos">
                    <Button>Ver todos los productos</Button></NavLink>
                </div>

            </div>
            <div className="imagen-4">
                <img src="./public/Images/BraveTogether_Inicio.jpg" alt="" />
            </div>
            <NavBar_reverse />
            <Footer />
        </div>
    );
}

export default Inicio;
