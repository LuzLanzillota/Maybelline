import { Link } from "react-router-dom";
import "./Item.css";

function Item({ id, title, text, img, description }) {
    return (
        <div className="item-container">
            <div className="card">
                <Link to={`/item/${id}`}>
                    <img src={img} alt={`Imagen de ${title}`} />
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{text}</p>
                        <p className="card-description">{description[0]}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Item;

