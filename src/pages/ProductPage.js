import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../Data/Products';
import CabinContext from '../components/CabinContext';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../components/CartContext';
import CartBanner from '../components/CartBanner';

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { cabinOrTable } = useContext(CabinContext);
    const { addToCart } = useCart();

    function findProductById(id) {
        for (let category in products) {
            for (let subcategory in products[category]) {
                if (Array.isArray(products[category][subcategory])) {
                    const item = products[category][subcategory].find(p => p.id === parseInt(id, 10));
                    if (item) return { ...item, category, subcategory };
                }
            }
        }
        return null;
    }

    const product = findProductById(id);

    if (!product) return <div>Product not found</div>;

    const renderOptions = () => {
        // Your existing renderOptions logic
    };

    return (
        <div className="product-page">
            <Header />
            <FontAwesomeIcon
                icon={faReply}
                className="m-4 cursor-pointer text-black"
                size="2x"
                onClick={() => navigate(-1)}
            />
            <div className="p-4">
                <div className="text-center">
                    <img src={product.img} alt={product.name} className="w-32 h-32 object-cover mx-auto mb-4" />
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-xl font-bold mb-4">{product.price} NOK</p>
                </div>
                {renderOptions()}
                <div className="mt-4">
                    <label className="block text-gray-700 mb-2" htmlFor="comment">
                        Kommentar til restauranten
                    </label>
                    <textarea id="comment" name="comment" rows="4" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Skriv her.."></textarea>
                </div>
                <button
                    className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 mt-4 w-full"
                    onClick={() => addToCart(product)}
                >
                    Legg til i handlekurv
                </button>
            </div>
            <CartBanner />
        </div>
    );
};

export default ProductPage;
