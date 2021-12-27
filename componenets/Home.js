import React from 'react';
import Header from './Header';
import ProductList from './ProductList';

const Home = () => {
  return (
    <>
      <div className="home-component">
        <Header />
        <ProductList />
      </div>
    </>
  );
};

export default Home;
