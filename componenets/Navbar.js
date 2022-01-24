import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase/firebase-auth";
import { setUser } from "../feature/CartSlice";
import { useRouter } from "next/router";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const { user } = useSelector((state) => state.cart);
  const { basketTotalItem } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const route = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  const hendelAuth = () => {
    if (user) {
      auth.signOut();
    } else {
      route.push("/login");
    }
  };
  return (
    <>
      <header>
        <div className="navbar">
          <nav className="nav-contenear">
            <div className="left-side">
              <div className="nav-brand">
                <img
                  onClick={() => route.push("/")}
                  src="https://links.papareact.com/f90"
                  alt="logo"
                />
              </div>

              <div className="country">
                <p>Hello</p>
                <h5>
                  <i className="fas fa-map-marker-alt"></i> Select your address
                </h5>
              </div>
            </div>
            <div className="nav-input">
              <input type="text" />
              <SearchIcon className="search-icon" />
            </div>
            <div className="right-side">
              <div className="acount" onClick={hendelAuth}>
                <p className="email">Hello, {user ? user.email : "Guest"}</p>
                <h5>{user ? "sing out" : "sing in"}</h5>
              </div>
              <div className="order">
                <p>
                  Returns
                  <br /> & Orders
                </p>
              </div>
              <div onClick={() => route.push("/checkout")} className="checkout">
                <ShoppingBasketIcon className="basket" />
                <small>{basketTotalItem}</small>
              </div>
            </div>
          </nav>
        </div>
        <div className="others-section">
          <div className="others-row">
            <div className="others-coloum">
              <i className="fas fa-bars"></i>
              <p>All</p>
            </div>
            <div className="others-coloum">
              <ul>
                <li>Best Sellers</li>
                <li>Customer Service</li>
                <li>Prime</li>
                <li>New Releases</li>
                <li>Books</li>
                <li>Pharmacy</li>
                <li>Registry</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
