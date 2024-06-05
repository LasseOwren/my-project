import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../Data/Products';
import CabinContext from '../components/CabinContext';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cabinOrTable } = useContext(CabinContext);

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
    if (product.category === 'Mat' && product.subcategory === 'Burgers') {
      return (
        <>
          <h3 className="text-lg font-semibold mb-2">Allergener?</h3>
          <div className="mb-4">
            <label className="block mb-2">
              <input type="radio" name="allergen" value="glutenfritt" className="mr-2" /> Glutenfritt brød
            </label>
            <label className="block mb-2">
              <input type="radio" name="allergen" value="beyond" className="mr-2" /> Beyond burger
            </label>
          </div>
          <h3 className="text-lg font-semibold mb-2">Legg til noe ekstra</h3>
          <div className="mb-4">
            <label className="block mb-2">
              <input type="checkbox" name="extra" value="guacamole" className="mr-2" /> Guacamole + 29NOK
            </label>
            <label className="block mb-2">
              <input type="checkbox" name="extra" value="pommes" className="mr-2" /> Pommes frites + 39NOK
            </label>
            <label className="block mb-2">
              <input type="checkbox" name="extra" value="cheese" className="mr-2" /> Chili cheese + 39NOK
            </label>
            <label className="block mb-2">
              <input type="checkbox" name="extra" value="coca-cola" className="mr-2" /> Coca-cola + 29NOK
            </label>
            <label className="block mb-2">
              <input type="checkbox" name="extra" value="milkshake" className="mr-2" /> Milkshake + 35NOK
            </label>
          </div>
        </>
      );
    } else if (product.category === 'Drinks' && product.subcategory === 'IcedCoffee') {
      return (
        <>
          <h3 className="text-lg font-semibold mb-2">Velg melk</h3>
          <div className="mb-4">
            <label className="block mb-2">
              <input type="radio" name="milk" value="lettmelk" className="mr-2" /> Lettmelk
            </label>
            <label className="block mb-2">
              <input type="radio" name="milk" value="helmelk" className="mr-2" /> Helmelk
            </label>
            <label className="block mb-2">
              <input type="radio" name="milk" value="havremelk" className="mr-2" /> Havremelk
            </label>
            <label className="block mb-2">
              <input type="radio" name="milk" value="soyamelk" className="mr-2" /> Soyamelk
            </label>
          </div>
        </>
      );
    } else if (product.category === 'Alkohol') {
      return (
        <>
          <p className="text-sm text-gray-600 mb-4">Obs: Man må være over 18 år for å bestille denne varen, om du ikke er over 18 år og man velger å gå videre blir varen ikke refundert</p>
          <h3 className="text-lg font-semibold mb-2">Legg til noe ekstra</h3>
          <div className="mb-4">
            <label className="block mb-2">
              <input type="checkbox" name="extra" value="nøtter" className="mr-2" /> Nøtter + 39NOK
            </label>
            <label className="block mb-2">
              <input type="checkbox" name="extra" value="chips" className="mr-2" /> Chips + 29NOK
            </label>
            <label className="block mb-2">
              <input type="checkbox" name="extra" value="nachos" className="mr-2" /> Nachos m/dip + 59NOK
            </label>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h3 className="text-lg font-semibold mb-2">Legg til noe ekstra</h3>
          <div className="mb-4">
            <label className="block mb-2">
              <input type="checkbox" name="extra" value="extra-item" className="mr-2" /> Extra item + 29NOK
            </label>
          </div>
        </>
      );
    }
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
        </div>
        {renderOptions()}
        <div className="mt-4">
          <label className="block text-gray-700 mb-2" htmlFor="comment">
            Kommentar til restauranten
          </label>
          <textarea id="comment" name="comment" rows="4" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Skriv her.."></textarea>
        </div>
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 mt-4 w-full">
          Legg til i handlekurv
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
