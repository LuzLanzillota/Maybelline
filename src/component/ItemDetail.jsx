import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import "./ItemDetail.css";

function ItemDetail(props) {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const { price, title, description, img, stock, id } = props;

    const { addItem } = useContext(cartContext);

    function onSubmitCount(count) {
        addItem({ id, price, title, count, img });
        setIsAddedToCart(true);
    }

    return (
        <div className="detail-container">
            <div className="detail">
                <div className="product-detail">
                    <img src={img} alt="product img" className="product-img" />
                    <div className="product-info">
                        <div className="product-title">
                            <h3>{title}</h3>
                        </div>
                        <div className="product-description-1">
                            <p>{description[0]}</p>
                        </div>

                        <h4>Sobre el producto</h4>
                        <p className="product-description">{description[1]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
