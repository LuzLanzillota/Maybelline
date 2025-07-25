import { createContext, useState } from "react";

const cartContext = createContext({ cartItems: [] });

export function CartContextProvider(props) {
    const [cartItems, setCartItems] = useState([]);

    function getTotalPrice() {
        return cartItems.reduce((total, item) => total + item.count * item.price, 0);
    }

    function removeItem(id) {
        setCartItems(cartItems.filter((item) => item.id !== id));
    }

    function addItem({ price, id, title, img, count }) {
        setCartItems([...cartItems, { id, title, img, count, price }]);
    }

    function countItemsInCart() {
        return cartItems.reduce((total, item) => total + item.count, 0);
    }

    function clearCart() {
        setCartItems([]);
    }

    return (
        <cartContext.Provider
            value={{
                cartItems,
                countItemsInCart,
                addItem,
                removeItem,
                getTotalPrice,
                clearCart,
                setCartItems,
            }}
        >
            {props.children}
        </cartContext.Provider>
    );
}

export default cartContext;
