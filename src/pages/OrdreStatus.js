import React from 'react';
import Header from '../components/Header';
import { useCart } from '../components/CartContext';

const OrdreStatus = () => {
    const { cart, getTotalPrice } = useCart();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <div className="p-8">
                <h1 className="text-3xl font-bold text-center mb-12">Ordre Status</h1>
                <div className="flex justify-center items-center mb-12">
                    <div className="flex flex-col items-center mx-4">
                        <div className="w-8 h-8 bg-red-600 rounded-full mb-2"></div>
                        <span>Mottatt</span>
                    </div>
                    <div className="flex-1 border-t-2 border-red-600 mx-4"></div>
                    <div className="flex flex-col items-center mx-4">
                        <div className="w-8 h-8 bg-red-600 rounded-full mb-2"></div>
                        <span>Forbereder</span>
                    </div>
                    <div className="flex-1 border-t-2 border-gray-300 mx-4"></div>
                    <div className="flex flex-col items-center mx-4">
                        <div className="w-8 h-8 bg-gray-300 rounded-full mb-2"></div>
                        <span>Ferdig</span>
                    </div>
                </div>
                <p className="text-center mb-12">Estimert tid: 15 minutter</p>
                <div className="border-t border-b border-gray-300 py-8">
                    <div className="flex justify-between mb-6">
                        <span className="font-bold">Produkt</span>
                        <span className="font-bold">Pris</span>
                    </div>
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between mb-4">
                            <span>{item.quantity}x {item.name}</span>
                            <span>{item.price} kr</span>
                        </div>
                    ))}
                    <div className="flex justify-between mt-8">
                        <span className="font-bold">Total</span>
                        <span className="font-bold">{getTotalPrice()} kr</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdreStatus;
