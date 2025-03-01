import React from "react";
import "./Container.css";
import { useNavigate } from "react-router-dom";
const Container = (props) => {
   const navigate=useNavigate();
  function cart() {
   localStorage.setItem("id",props.id)
   navigate('/Card')
  }
  return (
    <div className="box">
      <h3 id="h3">{props.productName}</h3>
      <img src={props.img} alt="Product Image" />
      <h4 id="h4">PRICE:${props.price}</h4>
      <h5 id="h5">RATING:{props.rating}</h5>
      <h3 id="h6">{props.Descrpt}</h3>
      <button id="btn" onClick={cart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Container;
