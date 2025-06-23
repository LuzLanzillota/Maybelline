import Footer from "./Footer";
import NavBar_reverse from "./NavBar_reverse";
import "./sobrenosotros.css";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
function Sobre() {
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
                    <img src="/Images/SomosMaybelline.jpg" alt="imagen somos maybelline" />
                </div>

                <div className="video-container">

                    <iframe
                        width="1000"
                        height="600"
                        src="https://www.youtube.com/embed/aPddDiciwiY?autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="imagen-5">
                    <img src="/Images/CreemosEn.png" alt="" />
                </div>

                <NavBar_reverse />
                <Footer />
            </div>
        </>
    );
}

export default Sobre;
