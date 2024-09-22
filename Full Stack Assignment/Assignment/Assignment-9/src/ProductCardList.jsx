import React, { useState, useEffect } from 'react';
import './ProductCardList.css'; // optional: create CSS for styling
import ProductCard from './ProductCard';

const ProductCardList = () => {
  const [products, setProducts] = useState([]); // State for holding product data
  const [loading, setLoading] = useState(true); // State for managing loading state

  // Fetch data using useEffect when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Set the product data
        setLoading(false); // Loading is complete
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false); // Stop loading on error as well
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-card-list">
      {loading ? (
        <p>Loading...</p> // Show loading message while fetching
      ) : (
        <div className="card-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCardList;
