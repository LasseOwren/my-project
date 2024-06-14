import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import { products } from '../Data/Products';
import CartBanner from '../components/CartBanner';


// Component for the menu page
const Menu = () => {
    const [category, setCategory] = useState('Mat');
    const navigate = useNavigate();

    // Function to render product cards
    const renderProducts = (items) => {
        if (!Array.isArray(items)) {
            return <div>No products available</div>;
        }

        return items.map((item) => (
            <div key={item.id} className="product-card bg-white shadow-md rounded-lg p-6 mb-6 flex items-center">
                <img src={item.img} alt={item.name} className="w-28 h-28 object-cover mr-6 rounded-md" />
                <div>
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <p className="text-xl font-bold mb-4">{item.price} NOK</p>
                    <button
                        className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600"
                        onClick={() => navigate(`/product/${item.id}`)}
                    >
                        Bestill
                    </button>
                </div>
            </div>
        ));
    };

    const renderSubcategories = (subcategories) => {
        return Object.keys(subcategories).map((subCategory) => (
            <div key={subCategory} className="mb-8">
                <h2 className="text-2xl font-bold mb-6">{subCategory}</h2>
                {renderProducts(subcategories[subCategory])}
            </div>
        ));
    };

    return (
        <div className="menu">
            <Header />
            <div className="flex justify-between items-center my-4 p-4">
                <FontAwesomeIcon
                    icon={faReply}
                    className="cursor-pointer text-black"
                    size="2x"
                    onClick={() => navigate('/')}
                />
            </div>
            <div className="highlight-offer mb-6 px-4">
                <img src="/productImages/offer.png" alt="Special Offer" className="w-full rounded-lg" />
            </div>
            <nav className="categories flex justify-around p-4 mb-6 border-b border-gray-300">
                <button className={`px-4 py-2 ${category === 'Mat' ? 'border-b-2 border-black font-bold' : ''}`} onClick={() => setCategory('Mat')}>Mat</button>
                <button className={`px-4 py-2 ${category === 'Drinks' ? 'border-b-2 border-black font-bold' : ''}`} onClick={() => setCategory('Drinks')}>Drikke</button>
                <button className={`px-4 py-2 ${category === 'Alkohol' ? 'border-b-2 border-black font-bold' : ''}`} onClick={() => setCategory('Alkohol')}>Bar</button>
            </nav>
            <div className="products p-4">
                {category === 'Mat' ? renderSubcategories(products.Mat) : renderSubcategories(products[category])}
            </div>
            <CartBanner />
        </div>
    );
};

export default Menu;
