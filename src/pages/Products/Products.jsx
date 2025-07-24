// src/pages/Products/Products.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.scss';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Adjust the number of products per page as needed

  useEffect(() => {
    axios.get('http://localhost:5001/api/products') // غيّر الرابط إذا اختلف عندك
      .then(response => {
        setProducts(response.data);
        console.log('Response data:', response.data);
        setLoading(false);
        

      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <section className="products-page">
      {/* <h2 className="products-title">Our Sneakers</h2> */}

      {loading ? (
        <p className="loading">Loading products...</p>
      ) : (
        <>
          <div className="products-grid">
            {currentProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imageURL} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <Link to={`/product/${product.id}`}>
                    <button>View Details</button>
                </Link>

              </div>
            ))}
          </div>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}


export default Products;
