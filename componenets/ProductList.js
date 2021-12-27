import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, cartTotalItemAndAmount } from '../feature/CartSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { featchProduct } from '../feature/ProductSlice';
import { store } from '../app/store';

const ProductList = () => {
  const product = useSelector((state) => state.products.product);
  const getItemQuintityAndAmount = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const concate = (string, number) => {
    return string?.length > number
      ? string.substring(0, number) + '...'
      : string;
  };
  const titleConcate = (string, number) => {
    return string?.length > number
      ? string.substring(0, number) + '...'
      : string;
  };

  useEffect(() => store.dispatch(featchProduct()), []);

  useEffect(() => {
    dispatch(cartTotalItemAndAmount());
  }, [getItemQuintityAndAmount]);

  return (
    <>
      {product ? (
        <div>
          <div className="product-list">
            {product?.slice(0, 8).map((carent) => {
              const { id, title, price, description, image, rating } = carent;

              const rate = Math.round(rating.rate);

              return (
                <div key={id} className="product-box">
                  <div className="product-title">
                    <h4>{titleConcate(title, 25)}</h4>
                    <p>{concate(description, 120)}</p>
                  </div>

                  <div className="image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="last-seation">
                    <div className="price-reating">
                      {Array(rate)
                        .fill()
                        .map((_, i) => (
                          <i class="fas fa-star"></i>
                        ))}
                      <p>
                        <small>$</small>
                        <strong>{price}</strong>
                      </p>
                    </div>
                    <div className="btn">
                      <button onClick={() => dispatch(addToCart(carent))}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {product?.slice(8, 9).map((carent) => {
            const { id, title, price, description, image, rating } = carent;
            const rate = Math.round(rating.rate);

            return (
              <div key={id} className="product-box-full-screen">
                <div className="product-title">
                  <h4>{title}</h4>
                  <p>{concate(description, 120)}</p>
                </div>

                <div className="image-full-screen">
                  <img src={image} alt={title} />
                </div>
                <div className="price-reating">
                  {Array(rate)
                    .fill()
                    .map((_, i) => (
                      <i class="fas fa-star"></i>
                    ))}
                  <p>
                    <small>$</small>
                    <strong>{price}</strong>
                  </p>
                </div>
                <div className="btn">
                  <button id="btn" onClick={() => dispatch(addToCart(carent))}>
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
          <div className="product-list-all">
            {product?.slice(9, product.length).map((carent) => {
              const { id, title, price, description, image, rating } = carent;
              const rate = Math.round(rating.rate);
              return (
                <div key={id} className="product-box">
                  <div className="product-title">
                    <h4>{titleConcate(title, 25)}</h4>
                    <p>{concate(description, 100)}</p>
                  </div>
                  <div className="image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="last-seation">
                    <div className="price-reating">
                      {Array(rate)
                        .fill()
                        .map((_, i) => (
                          <i class="fas fa-star"></i>
                        ))}
                      <p>
                        <small>$</small>
                        <strong>{price}</strong>
                      </p>
                    </div>
                    <div className="btn">
                      <button onClick={() => dispatch(addToCart(carent))}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
              {
              }
            })}
          </div>
        </div>
      ) : (
        <div className="field-featching">
          <CircularProgress disableShrink />
        </div>
      )}
    </>
  );
};

export default ProductList;
