import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const BetalingOptions = () => {
    const navigate = useNavigate();

    const handlePaymentOption = () => {
        navigate('/godkjent-betaling');
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <div className="flex-grow p-4 md:p-8 flex flex-col justify-start items-center pt-20 relative">
                <FontAwesomeIcon
                    icon={faReply}
                    className="absolute left-0 top-0 m-4 cursor-pointer text-black"
                    style={{ zIndex: 20 }}
                    size="2x"
                    onClick={() => navigate('/')} // Navigates to the home page when the icon is clicked
                />
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8">Velg betalingsmåte:</h1>
                    <hr className="border-t-2 border-gray-300 mb-6" />
                    <div className="my-6">
                        <button 
                            onClick={handlePaymentOption} 
                            className="bg-white border border-gray-300 py-4 px-6 rounded-full hover:bg-gray-100 mt-4 w-full flex items-center justify-center"
                        >
                            <img src="/strex-logo.png" alt="Strex" className="h-8 mr-2" />
                        </button>
                        <button 
                            onClick={handlePaymentOption} 
                            className="bg-white border border-gray-300 py-4 px-6 rounded-full hover:bg-gray-100 mt-4 w-full flex items-center justify-center"
                        >
                            <img src="/Mastercard-logo.png" alt="Mastercard" className="h-8 mr-2" />
                        </button>
                        <button 
                            onClick={handlePaymentOption} 
                            className="bg-white border border-gray-300 py-4 px-6 rounded-full hover:bg-gray-100 mt-4 w-full flex items-center justify-center"
                        >
                            <img src="/vipps-logo.png" alt="Vipps" className="h-8 mr-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BetalingOptions;
