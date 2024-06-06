import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const BetalingOptions = () => {
    const navigate = useNavigate();

    const handlePaymentOption = () => {
        navigate('/godkjent-betaling');
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <div className="flex-grow p-4 md:p-8 flex flex-col justify-start items-center pt-20 relative">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8">Velg betalingsalternativ</h1>
                    <div className="my-6">
                        <button 
                            onClick={handlePaymentOption} 
                            className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 mt-4 w-full"
                        >
                            Betal med kort
                        </button>
                        <button 
                            onClick={handlePaymentOption} 
                            className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 mt-4 w-full"
                        >
                            Betal med Vipps
                        </button>
                        <button 
                            onClick={handlePaymentOption} 
                            className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 mt-4 w-full"
                        >
                            Betal med PayPal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BetalingOptions;
