// ProductDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetails.scss";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <div className="product-images">
        <img src={product.imageURL} alt={product.name} className="main-image" />
        {/* ممكن تضيف صور إضافية هون لاحقًا */}
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">{product.price} $</p>

        <div className="options">
          <select>
            <option>Color</option>
            {/* ... خيارات اللون لاحقًا */}
          </select>
          <select>
            <option>Size</option>
            {/* ... خيارات المقاس لاحقًا */}
          </select>
        </div>

        <button className="add-to-cart">ADD TO CART</button>

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
