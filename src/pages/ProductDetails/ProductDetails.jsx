// ProductDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetails.scss";
import { useCart } from "../../context/CartContext";

function ProductDetails() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <div className="product-images">
        <img
          src={product.imageURL}
          alt={product.name}
          className="main-image"
        />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">{product.price} $</p>

        <div className="options">
          <select>
            <option>Color</option>
            {/* colors */}
          </select>
          <select>
            <option>Size</option>
            {/* sizes */}
          </select>
        </div>

        <button
          className="add-to-cart"
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              imageURL: product.imageURL,
            })
          }
        >
          ADD TO CART
        </button>

        <div className="description">
          <ul>
            <li>- Full-grain leather upper / lining</li>
            <li>- Premium rounded polyester laces</li>
            <li>- Molded EVA sockliner</li>
            <li>- Drop-in EVA midsole</li>
            <li>- All-terrain rubber outsole</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
