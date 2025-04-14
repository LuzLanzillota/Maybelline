import Footer from "./Footer";
import NavBar from "./NavBar";
import NavBar_reverse from "./NavBar_reverse";
import './Brave-together.css';
import Carrusel from "./Carrusel";

function Brave(params) {
    return (
        <div>
            <div className="imagen-1">
                <img src="./public/Images/BraveTogether.jpg" alt="" />
            </div>
            <div className="imagen-6">
                <img src="./public/Images/CuidaTuSaludMental.jpg" alt="" />
                <div className="practica">
                    <img src="./public/Images/practica.png" alt="" />
                </div>
            </div>
            <div className="imagen-1">
                <img src="./public/Images/NuestroCompromiso.png" alt="" />
            </div>
            <div className="seccion-carrusel">
                <Carrusel />
            </div>
            <div className="image-7">
                <img src="./public/Images/presidente.png" alt="" />
            </div>
            <NavBar_reverse />
            <Footer />
        </div>
    );
}
export default Brave;