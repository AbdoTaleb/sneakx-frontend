import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetails.scss";
import { useCart } from "../../context/CartContext";

function ProductDetails() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const colors = ["Black", "White", "Blue"];
  const sizes = ["42", "43", "44", "45", "46"];

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
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="">Choose color</option>
            {colors.map((color) => (
              <option
                key={color}
                value={color}
              >
                {color}
              </option>
            ))}
          </select>

          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">Choose size</option>
            {sizes.map((size) => (
              <option
                key={size}
                value={size}
              >
                {size}
              </option>
            ))}
          </select>
        </div>

        <button
          className="add-to-cart"
          onClick={() => {
            if (!selectedColor || !selectedSize) {
              alert("Please select color and size");
              return;
            }

            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              imageURL: product.imageURL,
              color: selectedColor,
              size: selectedSize,
            });
          }}
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
