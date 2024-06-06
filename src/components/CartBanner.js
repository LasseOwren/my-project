import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';

const CartBanner = () => {
    const { getTotalItems, getTotalPrice } = useCart();
    const navigate = useNavigate();

    return (
        <div 
            className="fixed bottom-0 left-0 right-0 bg-red-600 text-white flex justify-between items-center p-4 cursor-pointer"
            onClick={() => navigate('/cart')}
        >
            <div className="flex items-center">
                <div className="bg-white text-red-600 rounded-full h-8 w-8 flex justify-center items-center mr-2">{getTotalItems()}</div>
                <span>Se bestilling</span>
            </div>
            <div>kr {getTotalPrice()},00</div>
        </div>
    );
};

export default CartBanner;
