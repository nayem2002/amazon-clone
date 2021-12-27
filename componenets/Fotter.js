import React from 'react';

const Fotter = () => {
  const ScrollTo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="fotter-head">
        <div className="button" onClick={ScrollTo}>
          <button>Back to top</button>
        </div>

        <div className="fotter-contenear">
          <div className="category">
            <div className="category-one">
              <h3>Get to Know Us</h3>
              <ul>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Sustainabnility</li>
                <li>Press Center</li>
                <li>Investor Relations</li>
                <li>Amazon Devies</li>
              </ul>
            </div>
            <div className="category-two">
              <h3>Make Money with Us</h3>
              <ul>
                <li>Sell products on Amaxon</li>
                <li>Sell apps on Amazon</li>
                <li>Become an Affiliate</li>
                <li>Become a Deleivery Driver</li>
                <li>Start a package delivery business</li>
                <li>Advertise Your Products </li>
                <li>Self-Prulished with Hub</li>
              </ul>
            </div>
            <div className="category-three">
              <h3>Amazon Payment Products</h3>
              <ul>
                <li> Amazon Rewards Visa Signature Cards</li>
                <li>Amazon.com Store Card</li>
                <li>Amazon Secured Card</li>
                <li>Amazon Business Line of Credit</li>
                <li>Amazon Business Card</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
              </ul>
            </div>

            <div className="category-four">
              <h3>Let Us Help You</h3>
              <ul>
                <li>Amazon and COVID-19</li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping Rates & Policies</li>
                <li>Amazon Prime</li>
                <li>Returns & Replacements</li>
                <li>Manage Your Content and Devices</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="fotter-inner">
            <div className="others">
              <img src="https://links.papareact.com/f90" alt="image" />
              <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter;
