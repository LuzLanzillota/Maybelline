import React, { useEffect, useState } from "react";
import "./Carrusel.css";

const imagenes = [
    "/Images/ElyseFox.jpg",
    "/Images/LarissaMay.jpg",
    "/Images/StormReid.jpg"
];

function Carrusel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex((prev) => (prev + 1) % imagenes.length);
        }, 4000); 
        return () => clearInterval(intervalo);
    }, []);

    const irAImagen = (i) => setIndex(i);

    return (
        <div className="contenedor-carrusel">
            <div className="slides">
                {imagenes.map((img, i) => (
                    <div
                        className="slide"
                        key={i}
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        <img src={img} alt={`slide-${i}`} />
                    </div>
                ))}
            </div>

            <div className="indicadores">
                {imagenes.map((_, i) => (
                    <span
                        key={i}
                        className={`punto ${i === index ? "activo" : ""}`}
                        onClick={() => irAImagen(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carrusel;

