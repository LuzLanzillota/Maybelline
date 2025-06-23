import { NavLink } from "react-router-dom";
import Loader from "./Loader";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import Footer from "./Footer";
import "./Inicio.css";
import NavBar_reverse from "./NavBar_reverse";

function Inicio() {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {showLoader && <Loader />}
            <div>
                <div className="imagen-1">
                    <img src="/Images/Anuncio_Inicio.png" alt="imagen de inicio" />
                    <div>
                        <div className="ver-producto">
<NavLink to="/item/nvab00wgJR0zmv7jouJK">
    <img src="/Images/ver-producto.png" alt="boton" />
</NavLink>

                        </div>
                    </div>
                </div>
                <div className="imagen-2">
                    <img src="/Images/TodoSobreMaybelline_Inicio.jpg" alt="Todo sobre maybelline" />

                    <div className="mas-sobre-nosotros">
                        <NavLink to="/sobrenosotros"> <img src="/Images/mas-sobre-nosotros.png" alt="" /></NavLink>
                    </div>
                </div>
                <div className="imagen-3">
                    <h1>ANIMATE A PROBAR NUESTROS NUEVOS PRODUCTOS Y EXPLORAR LOS LOOKS EN TENDENCIA!</h1>
                    <img src="/Images/productos_inicio.png" alt="" />
                    <div className="boton">
                        <NavLink to="/productos">
                            <Button>Ver todos los productos</Button></NavLink>
                    </div>

                </div>
                <div className="imagen-4">
                    <img src="/Images/BraveTogether_Inicio.jpg" alt="" />
                </div>
                <NavBar_reverse />
                <Footer />
            </div>
        </>
    );
}

export default Inicio;
