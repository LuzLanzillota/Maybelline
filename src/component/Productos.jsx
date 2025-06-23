import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import ItemListContainer from "./ItemListContainer";
function Productos(params) {
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
                <img src="/Images/productos.png" alt="Banner productos" />
            </div>
            {/* <Buscador/> */}
            <ItemListContainer />
        </div>
        </>
    );
}
export default Productos;