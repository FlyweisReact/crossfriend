/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";

const ProductCarousel = () => {
  const options = {
    items: 4,
    margin: 20,
    loop: false,
    nav: false,
    dots: false,
    center: true,
  };
  return (
    <OwlCarousel className="owl-theme product-carousel" {...options}>
      <div className="Item">
        <img src="/Image/6.png" alt=" " />
        <p className="title">Chocolate Truffle Cake </p>
        <span className="price-offer">
          <span className="mrp">₹800</span>
          <span className="discounted-price">₹950</span>
          <span className="offer">Min 50 % off</span>
        </span>
      </div>
      <div className="Item">
        <img src="/Image/6.png" alt=" " />
        <p className="title">Chocolate Truffle Cake </p>
        <span className="price-offer">
          <span className="mrp">₹800</span>
          <span className="discounted-price">₹950</span>
          <span className="offer">Min 50 % off</span>
        </span>
      </div>
      <div className="Item">
        <img src="/Image/6.png" alt=" " />
        <p className="title">Chocolate Truffle Cake </p>
        <span className="price-offer">
          <span className="mrp">₹800</span>
          <span className="discounted-price">₹950</span>
          <span className="offer">Min 50 % off</span>
        </span>
      </div>
      <div className="Item">
        <img src="/Image/6.png" alt=" " />
        <p className="title">Chocolate Truffle Cake </p>
        <span className="price-offer">
          <span className="mrp">₹800</span>
          <span className="discounted-price">₹950</span>
          <span className="offer">Min 50 % off</span>
        </span>
      </div>
    </OwlCarousel>
  );
};

export default ProductCarousel;
