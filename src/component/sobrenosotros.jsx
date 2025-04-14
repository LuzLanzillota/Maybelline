import { useState } from "react";
import Footer from "./Footer";
import NavBar_reverse from "./NavBar_reverse";
import "./sobrenosotros.css";

function Sobre() {

    return (
        <div>
            <div className="imagen-1">
                <img src="./public/Images/SomosMaybelline.jpg" alt="imagen somos maybelline" />
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
                <img src="./public/Images/CreemosEn.png" alt="" />
            </div>

            <NavBar_reverse />
            <Footer />
        </div>
    );
}

export default Sobre;
