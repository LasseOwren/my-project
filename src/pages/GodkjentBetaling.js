import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../components/CartContext';

const GodkjentBetaling = () => {
    const navigate = useNavigate();
    const { cart, getTotalPrice } = useCart();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <div className="flex-grow p-4 md:p-8 flex flex-col justify-start items-center pt-20 relative">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8">Betaling er godkjent!</h1>
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mb-6" size="10x" />
                    <div className="my-6">
                        <p className="text-2xl font-bold">Total</p>
                        <hr className="border-t-2 border-gray-300 my-4" />
                        <p className="text-4xl font-bold">{getTotalPrice()} kr</p>
                        <hr className="border-t-2 border-gray-300 my-4" />
                    </div>
                    <p className="text-base">
                        Klikk her for å se <span className="font-bold" onClick={() => navigate('/ordre-status')}>ordre status</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GodkjentBetaling;
