import Footer from "./Footer";
import NavBar_reverse from "./NavBar_reverse";
import './Auto_cuidado.css';
import Carrusel from "./Carrusel";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
function Autocuidado(params) {
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
                    <img src="\Images\PracticaLaAutoayuda.jpg" alt="" />
                </div>
                <div className="imagen-7">
                    <img src="\Images\Auto-cuidado.png" alt="" />
                </div>
                <NavBar_reverse />
                <Footer />
            </div>
        </>
    );
}
export default Autocuidado;