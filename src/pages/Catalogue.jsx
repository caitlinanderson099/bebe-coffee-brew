import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../components/PageHeader';

const Catalogue = () => {

    const [products, setProducts] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    axios.get('/PRODUCTS.json')
      .then((res) => {
        const allProducts = res.data;
        setProducts(allProducts);
        setBestSellers(allProducts.filter(product => product.best_seller));
        setNewArrivals(allProducts.filter(product => product.new_arrival));
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

   // BEST SELLERS SECTION COMPONENT
  const BestSellers = () => (
    <section className="best-sellers">
      <h2 className='section-title'>Best Sellers</h2>
      <div className="product-grid">
        {bestSellers.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.product_image} alt={product.title} />
            <h4>{product.title}</h4>
            <p className='roast'>Roast Level: {product.roast_level}</p>
            <p className='description'>{product.short_description}</p>
            <p className='price'>${product.price}</p>
            <button className='product-button'>ADD TO CART</button>
          </div>
        ))}
      </div>
    </section>
  );

   // NEW ARRIVALS SECTION COMPONENT
  const NewArrivals = () => (
    <section className="new-arrivals">
      <h2 className='section-title'>New Arrivals</h2>
      <div className="product-grid">
        {newArrivals.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.product_image} alt={product.title} />
            <h4>{product.title}</h4>
            <p className='roast'>Roast Level: {product.roast_level}</p>
            <p className='description'>{product.short_description}</p>
            <p className='price'>${product.price}</p>
            <button className='product-button'>ADD TO CART</button>
          </div>
        ))}
      </div>
    </section>
  );

  // ALL PRODUCTS SECTION COMPONENT
  const AllProducts = () => (
    <section className="all-products">
      <h2 className='section-title'>All Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.product_image} alt={product.title} />
            <h4>{product.title}</h4>
            <p className='roast'>Roast Level: {product.roast_level}</p>
            <p className='description'>{product.short_description}</p>
            <p className='price'>${product.price}</p>
            <button className='product-button'>ADD TO CART</button>
          </div>
        ))}
      </div>
    </section>
  );




  // MASTER RETURN
  return (
    <div className='catalogue-page'>
      <PageHeader 
        title="Our" 
        highlight="Catalogue" 
        backgroundImage="/catalogue-bg.jpg" 
      />
      <BestSellers />
      <NewArrivals/>
      <AllProducts />

    </div>
  )
}

export default Catalogue
