import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Card.css';
const Card = () => {
  const navigate=useNavigate();
  const [product, setProduct] = useState([]);
  async function data() {
    axios.get('https://dummyjson.com/products/search?q=phone').then((res)=>{
      setProduct(res.data.products)
  })
  }



  useEffect(() => {data();}, []);
  var x = localStorage.getItem("id");
  const selectedProduct = product.find((data) => data.id == x);
  if (!selectedProduct) return <div>Product not found</div>;
    function buyitem(){
    navigate('/Home')
  }
  return (
    <div className="output">
      <div className='box'>
          <h3 id="h3">{selectedProduct.title}</h3>
          <img src={selectedProduct.images[0]} alt="Product Image" />
          <h4 id="h4">PRICE: ${selectedProduct.price}</h4>
          <h5 id="h5">RATING: {selectedProduct.rating}</h5>
      </div>
         <div> <button id="button" onClick={buyitem} >Other Item</button></div>
      </div>
  );
}

export default Card;
