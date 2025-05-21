// Base Imports
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('/PRODUCTS.json')
      .then(response => {
        const foundProduct = response.data.find(p => String(p._id) === id);
        setProduct(foundProduct);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-page">
      <div className="single-product-card">
        <h1>{product.title}</h1>
        <img src={product.product_image} alt={product.title} />
        <p>{product.short_description}</p>
      </div>
    </div>
  );
};


export default SingleProduct;