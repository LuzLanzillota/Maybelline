import getAsyncData, { getAsyncItemsByCategory } from "../data/database";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import './Buscador.css';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const { catid } = useParams();

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                let data;
                if (catid) {
                    data = await getAsyncItemsByCategory(catid);
                } else {
                    data = await getAsyncData();
                }
                setProducts(data);
            } catch (error) {
                alert(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [catid]);

    useEffect(() => {
        let result = [...products];

        if (searchTerm.trim() !== '') {
            result = result.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredProducts(result);
    }, [products, searchTerm]);

    return (
        <div className="buscador-container">
            <div className="search-container">
                <span className="search-icon">
                    <img src="/Images/lupa.png" alt="Lupa" />
                </span>
                <input
                    type="text"
                    placeholder="Buscar producto"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {loading ? (
                <p>Cargando productos...</p>
            ) : filteredProducts.length > 0 ? (
                <ItemList products={filteredProducts} />
            ) : (
                <p>No se encontraron productos.</p>
            )}
        </div>
    );
}

export default ItemListContainer;

