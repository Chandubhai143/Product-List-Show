import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{
      border: '5px solid #ccc',
      borderRadius: '30px',
      padding: '20px',
      margin: '30px',
      textAlign: 'center',
      justifyContent: 'center'
     
    }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    </div>
  );
}

export default ProductDetail;
