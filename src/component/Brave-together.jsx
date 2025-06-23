import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar_reverse from "./NavBar_reverse";
import './Brave-together.css';
import Carrusel from "./Carrusel";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function Brave(params) {
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
                <img src="/Images/BraveTogether.jpg" alt="" />
            </div>
            <div className="imagen-6">
                <img src="/Images/CuidaTuSaludMental.jpg" alt="" />
                <div className="practica">
                    <Link to="/autocuidado">
                        <img src="/Images/practica.png" alt="" /></Link>
                </div>
            </div>
            <div className="imagen-1">
                <img src="/Images/NuestroCompromiso.png" alt="" />
            </div>
            <div className="seccion-carrusel">
                <Carrusel />
            </div>
            <div className="image-7">
                <img src="/Images/presidente.png" alt="" />
            </div>
            <NavBar_reverse />
            <Footer />
        </div>
        </>
    );
}
export default Brave;