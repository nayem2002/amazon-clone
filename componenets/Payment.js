import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../feature/CartSlice';
import { PaymentElement } from '@stripe/react-stripe-js';

import {
  // PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';

const Payment = () => {
  const { basket, basketTotalAmount, basketTotalItem } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const stripe = useStripe();
  const element = useElements();
  const hendelSubmit = () => {};

  const cardElementOption = {
    style: {
      base: {
        fontSize: '16px',
        color: 'red',
      },
    },
  };
  return (
    <>
      {basket.length === 0 ? (
        <div className="payment-empty">
          <h3>Payment section empty</h3>
        </div>
      ) : (
        <>
          <div className="payment-containear">
            <div className="payment-checkout">
              <h2>Checkout({basketTotalItem} items)</h2>
            </div>
            <div className="all-product">
              <div className="payment-left-side">
                <div className="delivery-address">
                  <h3>Delivery Address</h3>
                  <span>test@gmil.com</span>
                  <br />
                  <span>test@gmil.com</span>
                  <br />
                  <span>test@gmil.com</span>
                </div>
                <div className="checkout-puduct">
                  <div className="heading">
                    <h3>Review items and delivery</h3>
                  </div>
                  {basket.map((carentEle) => {
                    const { id, title, price, image } = carentEle;
                    return (
                      <div key={id} className="items-box">
                        <div className="item-image">
                          <img src={image} alt="" />
                        </div>
                        <div className="item-detels">
                          <div className="items-price-others">
                            <h3>{title}</h3>
                            <p>
                              <small>$</small>
                              <strong>{price}</strong>
                            </p>
                            <span htmlFor="">In Stock</span>
                            <br />
                            <span htmlFor="">Eligible for Free Shipping</span>
                          </div>
                          <div className="quintity-button">
                            <button
                              onClick={() => dispatch(removeItem(carentEle))}
                            >
                              Delet
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="payment-right-side">
                <div className="totalAmout-box">
                  <h3>Payment methods</h3>
                  <form className="card-detels" action="">
                    <PaymentElement />
                    <h3>
                      Order Total : <small>$</small>
                      <strong>{Math.round(basketTotalAmount)}</strong>
                    </h3>
                    <button type="submit">Buy now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Payment;
