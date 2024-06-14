import React, { createContext, useState, useContext } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
    return useContext(CartContext);
};


// Provider component to wrap the app and provide cart state
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [couponApplied, setCouponApplied] = useState(false);

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) => {
            if (quantity <= 0) {
                return prevCart.filter(item => item.id !== productId);
            }
            return prevCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            );
        });
    };

    const getTotalItems = () => {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    };

    const getTotalPrice = () => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return couponApplied ? total * 0.9 : total;
    };

    const getDiscountAmount = () => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return total * 0.1;
    };

    const applyCoupon = (code) => {
        if (code === 'sommerbonus') {
            setCouponApplied(true);
        }
    };

    const resetCart = () => {
        setCart([]);
        setCouponApplied(false);
    };

    return (
        <CartContext.Provider value={{
            cart, addToCart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice, resetCart, applyCoupon, couponApplied, getDiscountAmount
        }}>
            {children}
        </CartContext.Provider>
    );
};
