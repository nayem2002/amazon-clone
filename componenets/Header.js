import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div className="beaner-image">
            <img loading="lazy" src="bener1.jpg" alt="bener" />
          </div>
          <div className="beaner-image">
            <img loading="lazy" src="bener2.jpg" alt="bener" />
          </div>
          <div className="beaner-image">
            <img loading="lazy" src="bener3.jpg" alt="bener" />
          </div>
          <div className="beaner-image">
            <img loading="lazy" src="bener4.jpg" alt="bener" />
          </div>
          <div className="beaner-image">
            <img loading="lazy" src="bener5.jpg" alt="bener" />
          </div>
        </Carousel>
        <div className="empty-div" />
      </header>
    </>
  );
};

export default Header;
