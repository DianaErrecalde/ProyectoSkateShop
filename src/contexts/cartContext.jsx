import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const [openCart, setOpenCart] = useState(false);

    //funcion para agregar un producto al carrito
    const addToCart = (item, unidades) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === item.id // Descuenta el stock en products y aumenta la cantidad en el carrito 
                    ? { ...product, stock: product.stock - unidades, cantidad: (product.cantidad + unidades) }
                    : product
            )
        );
    };

    //funcion para vaciar el carrito
    const clearCart = () => {
        setProducts(prevProducts =>
            prevProducts.map(product => ({
                ...product,
                stock: product.stock + product.cantidad, // restaura el stock
                cantidad: 0 // restaura la cantidad a 0
            }))
        );
    }

    //funcion para eliminar un producto del carrito
    const removeFromCart = (id) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === id
                    ? { ...product, stock: (product.cantidad + product.stock), cantidad: 0 } // restaura el stock y cantidad a 0
                    : product
            )
        );
    }

    // Calcular total de items y precio
    const totalItems = products.reduce((total, item) => total + (item.cantidad || 0), 0);
    const totalPrice = parseFloat(
        products.reduce((total, item) => total + (item.precio * (item.cantidad || 0)), 0).toFixed(2)
    );

    return (
        <CartContext.Provider value={{ addToCart, removeFromCart, clearCart, totalItems, totalPrice, openCart, setOpenCart, setProducts, products }}>
            {children}
        </CartContext.Provider>
    );

};