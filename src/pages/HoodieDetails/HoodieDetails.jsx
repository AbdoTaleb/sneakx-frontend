// HoodieDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HoodieDetails.scss"; 
import { useCart } from '../../context/CartContext';

function HoodieDetails() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [hoodie, setHoodie] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/hoodie/${id}`)
      .then((res) => setHoodie(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!hoodie) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <div className="product-images">
        <img src={`${import.meta.env.VITE_API_URL}${hoodie.imageURL}`} alt={hoodie.name} className="main-image" />
      </div>

      <div className="product-info">
        <h1>{hoodie.name}</h1>
        <p className="price">{hoodie.price} $</p>

        <div className="options">
          <select>
            <option>Color</option>
          </select>
          <select>
            <option>Size</option>
          </select>
        </div>

        
        <button
          className="add-to-cart"
          onClick={() =>
            addToCart({
              id: hoodie.id,
              name: hoodie.name,
              price: hoodie.price,
              imageURL: `https://localhost:5000${hoodie.imageURL}`, 
            })
          }
        >
          ADD TO CART
        </button>

        <div className="description">
          <ul>
            <li>- Soft cotton blend</li>
            <li>- Adjustable drawstring hood</li>
            <li>- Kangaroo pocket</li>
            <li>- Ribbed cuffs and hem</li>
            <li>- Unisex fit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HoodieDetails;
