import ItemListContainer from "./ItemListContainer";

function Productos(params) {
    return (
        <div>
            <div className="imagen-1">
                <img src="./public/Images/productos.png" alt="Banner productos" />
            </div>
            <ItemListContainer />
        </div>
    );
}
export default Productos;