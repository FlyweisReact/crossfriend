/** @format */

import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";

const FormalProduct = () => {
  const carouselRef = useRef(null);

  const options = {
    items: 5,
    margin: 20,
    loop: true,
    nav: false,
    dots: false,
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next(500);
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev(500);
    }
  };

  return (
    <div className="formal_product-carousel-containter">
      <OwlCarousel
        className="owl-theme"
        {...options}
        ref={carouselRef}
      >
        <div className="Item">
          <img src="/Image/37.png" alt=" " />
          <p className="title">Chocolate Truffle Cream Cake Half kg </p>
          <span className="price-offer">
          <p>USD </p>
          </span>
        </div>
      </OwlCarousel>

      <div className="Prev_Next_Buttons">
        <img
          src="/Image/11.png"
          alt=""
          className="prev"
          onClick={handlePrevClick}
        />
        <img
          src="/Image/10.png"
          alt=""
          className="next"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default FormalProduct;
