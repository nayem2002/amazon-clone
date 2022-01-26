import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  cartTotalItemAndAmount,
  dicrementQuintity,
  removeItem,
} from "../feature/CartSlice";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const { user, basket, basketTotalItem, basketTotalAmount } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(cartTotalItemAndAmount());
  }, [basket]);
  const handlePayment = async () => {
    try {
      if (user) {
        const stripe = await stripePromise;

        const checkoutSession = await axios.post("/api/create-payment", {
          basket,
          email: user.email,
        });
        const res = await stripe.redirectToCheckout({
          sessionId: checkoutSession.data.id,
        });
        if (res.error) {
          alert(res.error.message);
        }
      } else {
        router.push("/signin");
      }
    } catch (error) {
      alert(error.message);
      // alert("somethign is wrong");
    }
  };
  return (
    <>
      <div className="checkout-containear">
        <div className="checkout-left-side">
          <div className="header-content">
            <img src="visa-card.png" alt="image" />
            <h3>
              Get a <span>$50 Amazon Gift Card instantly </span>upon aproval for
              the
              <strong>Amazon Rewards Visa Card</strong>
            </h3>
          </div>
          <div className="shopping-cart">
            <div className="mein-heading">
              <h1>
                {basket.length === 0
                  ? "Your Amazon Cart is empty."
                  : "Shopping Cart"}
              </h1>
              <hr />
            </div>
            {basket.map((carentEle) => {
              const { id, title, price, image, cartQuintity } = carentEle;
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
                      <div className="quintity">
                        <RemoveIcon
                          className="quintity-btn"
                          onClick={() => dispatch(dicrementQuintity(carentEle))}
                        />
                        <span disabled>{cartQuintity}</span>
                        <AddIcon
                          className="quintity-btn"
                          onClick={() => dispatch(addToCart(carentEle))}
                        />
                      </div>
                      <span>|</span>
                      <span
                        className="btn-quintity"
                        onClick={() => dispatch(removeItem(carentEle))}
                      >
                        Delet
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="sub-total">
              <h3>
                SubTotal ({basketTotalItem} items): <small>$</small>
                <strong>{Math.round(basketTotalAmount)}</strong>
              </h3>
            </div>
          </div>
          <div className="empty-div-checkout" />
        </div>
        {basket.length === 0 ? null : (
          <div className="checkout-right-side">
            <div className="totalAmout-box">
              <p>
                Your order qualifies for FREE Shipping. Choose this option at
                checkout. See details
              </p>
              <h3>
                SubTotal ({basketTotalItem} items): <small>$</small>
                <strong>{Math.round(basketTotalAmount)}</strong>
              </h3>
              <input type="checkbox" />
              <label>This order contains a gift</label>
              <br />

              <button onClick={handlePayment} type="button">
                Proceed to checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
