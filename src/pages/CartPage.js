import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, getTotalPrice, applyCoupon, couponApplied, getDiscountAmount } = useCart();
    const navigate = useNavigate();
    const [couponCode, setCouponCode] = useState('');

    const handleApplyCoupon = () => {
        applyCoupon(couponCode);
    };

    return (
        <div className="cart-page">
            <Header />
            <div className="flex justify-between items-center my-4 p-4">
                <FontAwesomeIcon
                    icon={faReply}
                    className="cursor-pointer text-black"
                    size="2x"
                    onClick={() => navigate(-1)}
                />
                <h1 className="text-2xl text-center font-bold w-full">Din handlekurv</h1>
            </div>
            <div className="p-4 space-y-6">
                {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between mb-6">
                        <img src={item.img} alt={item.name} className="w-16 h-16 object-cover mr-4 rounded-md" />
                        <div className="flex-1">
                            <h3 className="text-xl">{item.name}</h3>
                            <p>{item.price} NOK</p>
                        </div>
                        <div className="flex items-center">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span className="mx-2">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                    </div>
                ))}
                <div className="mt-4">
                    <h2 className="text-xl">Totalt: {getTotalPrice()} NOK</h2>
                    {couponApplied && (
                        <div className="text-green-500 mt-2">
                            Rabatt: -{getDiscountAmount()} NOK
                        </div>
                    )}
                </div>
                <div className="mt-12 space-y-4">
                    <label className="block text-gray-700 mb-2" htmlFor="discount-code">
                        Legg til rabattkode:
                    </label>
                    <input
                        type="text"
                        id="discount-code"
                        name="discount-code"
                        className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        placeholder="Skriv her.."
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button onClick={handleApplyCoupon} className="bg-red-600 text-white py-2 px-4 rounded">Bruk kode</button>
                </div>
                <button 
                    className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 mt-8 w-full"
                    onClick={() => navigate('/betaling-options')}
                >
                    Til betaling
                </button>
            </div>
        </div>
    );
};

export default CartPage;
