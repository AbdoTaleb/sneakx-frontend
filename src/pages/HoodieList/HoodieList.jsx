import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HoodieList.scss';
import { Link } from 'react-router-dom';

function HoodieList() {
  const [hoodies, setHoodies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const hoodiesPerPage = 10;

  useEffect(() => {
    axios.get('http://localhost:5001/api/hoodie') // Adjust the URL as needed
      .then(response => {
        setHoodies(response.data);
        console.log('Fetched hoodies:', response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching hoodies:', error);
        setLoading(false);
      });
  }, []);

  const indexOfLast = currentPage * hoodiesPerPage;
  const indexOfFirst = indexOfLast - hoodiesPerPage;
  const currentHoodies = hoodies.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(hoodies.length / hoodiesPerPage);

  return (
    <section className="hoodie-page">
      {/* <h2 className="page-title">Our Hoodies</h2> */}

      {loading ? (
        <p className="loading">Loading hoodies...</p>
      ) : (
        <>
          <div className="hoodie-grid">
            {currentHoodies.map(hoodie => (
              <div key={hoodie.id} className="hoodie-card">
                <img
                src={`${import.meta.env.VITE_API_BASE_URL}${hoodie.imageURL}`}
                alt={hoodie.name}
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />


                <h3>{hoodie.name}</h3>
                <p className="price">${hoodie.price}</p>
                <Link to={`/product/${hoodie.id}`}>
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

export default HoodieList;
