import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('http://localhost:9999/api/products/645e1b2cebd7d18d50865558');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

