import { createContext, useState,useContext, Children } from "react";


const CartContext = createContext(null);

export function CartProvider ({children}){
    const [cartItems, setCartItems] =useState([]);
   




    const addToCart = (item) => {
        setCartItems((prev) => [...prev,item])
    };

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
         <CartContext.Provider value={{ cartItems, addToCart,total}}>
   {children}
    </CartContext.Provider>
    );
}
export const useCart = () => useContext(CartContext);