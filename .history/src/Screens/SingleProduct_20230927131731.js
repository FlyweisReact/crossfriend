/** @format */

import React, { useState , useEffect } from "react";
import ProductCarousel from "../Components/Template/ProductCarousel";
import RelatedCarousel from "../Components/Template/RelatedCarousel";
import {  AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import ReviewCarousel from "../Components/Template/ReviewCarousel";
import { CustomizeModal } from "../Components/Modal/CustomizeModal";
import { useParams} from 'react-router-dom'
import { getProductDetail } from "../Repository/Api";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SingleProduct = () => {
  const { id } = useParams()
  const [ product , setProduct ] = useState({})
  const [ image , setImage ] = useState('')
  const [add, setAdd] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getProductDetail(id ,setProduct ,setImage)
  },[])

  const bakeryProducts = [
    {
      img: "/Image/19.png",
      title: "Bread",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/20.png",
      title: "Pastries",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/21.png",
      title: "Cookies",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
  ];

  const partyProduct = [
    {
      img: "/Image/22.png",
      title: "Bread",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/23.png",
      title: "Pastries",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/24.png",
      title: "Cookies",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
  ];


  const RatingComponent = (num) => {
    if (num == 0) {
      return (
        <span className="stars">
          <AiOutlineStar />
        </span>
      );
    } else if (num == 0.5) {
      return (
        <span className="stars">
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 1) {
      return (
        <span className="stars">
          <AiFillStar />
        </span>
      );
    } else if (num == 1.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 2) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 2.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 3) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 3.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 4) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 4.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 5.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 6) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 6.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 7) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 7.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 8) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 8.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 9) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 9.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 10) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    }
  };

  return (
    <>
      <CustomizeModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="single_product">
        <div className="left-container">
          <img src={image} alt="" className="upper_Image" />

          <div className="multiple-image">
          {product?.imageUrls?.map((i , index) => (
            <img src={i} alt="" key={index} onClick={() => setImage(i)} />
          ))}
          </div>
        </div>
        <div className="right-container">
          <p className="title"> {product?.name} </p>
          <p className="desc">
            {product?.description}
          </p>

          <div className="review-container">
              {RatingComponent(product?.ratings)}
            <p>({product?.numOfReviews} Review)</p>
          </div>
          <p className="price">₹1000</p>
          <p className="price" style={{ fontWeight: "600", fontSize: "20px" }}>
            Select Size
          </p>
          <div className="sizes">
            <p>250</p>
            <p>500</p>
            <p>1000</p>
            <p>1500</p>
          </div>

          <p className="price" style={{ fontWeight: "600", fontSize: "20px" }}>
            Select Quantity
          </p>

          <div className="buttons">
            {add ? (
              <div className="quantity_button">
                <span className="minus">
                  {" "}
                  <AiOutlineMinus />{" "}
                </span>
                <span> 1 </span>
                <span className="plus">
                  {" "}
                  <AiOutlinePlus />{" "}
                </span>
              </div>
            ) : (
              <button className="add_btn" onClick={() => setAdd(true)}>
                Add
              </button>
            )}

            <button
              className="customize_btn"
              onClick={() => setModalShow(true)}
            >
              Customize
            </button>
          </div>
        </div>
      </div>





      <div className="Reviews_Container">
        <p className="title">Reviews</p>
        <ReviewCarousel />
      </div>

      <div className="multi-background-heading">
        <p className="heading">Other Cake’s</p>
        <ProductCarousel />
        <button className="last-button">View More</button>
      </div>

      <div className="shop_product">
        <div className="Heading">
          <p>Bakery Product’s</p>
          <select>
            <option>Select Bakery Option's</option>
            <option></option>
          </select>
        </div>

        <RelatedCarousel data={bakeryProducts} />
      </div>

      <div className="shop_product">
        <div className="Heading">
          <p>Party Product’s</p>
        </div>

        <RelatedCarousel data={partyProduct} />
      </div>
    </>
  );
};

export default SingleProduct;
