import React from "react";
import Logo from "./logo.jpeg";
import Container from "./Container";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {
  const [products, setproduct] = useState([]);
  
  const navigate = useNavigate();
  async function fetchData() {
    axios.get('https://dummyjson.com/products/search?q=phone').then((res)=>{
      setproduct(res.data.products)
  })
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(products)
  var userName = localStorage.getItem("userName");
  function logoutpage(e) {
    localStorage.removeItem("userName");
    e.preventDefault();
    navigate("/Login");


  }
  return (
    <div>
      <div className="head">
        <div className="navBar">
          <div id="logo">
            <img src={Logo} alt="error" />
          </div>
          <div>
            <h3 id="heading">Hello {userName}</h3>
          </div>
          <div id="detail">
            <p id="home">HOME</p>
            <p id="contact">CONTACTS</p>
            <p id="about">ABOUT</p>
            <button onClick={logoutpage}>logout</button>
          </div>
        </div>
        <div className="body">
         {
          products.length>0 && <div id="box1">
            {products.map((data)=>{
             return (   <Container productName={data.title} img={data.images[0]} price={data.price} rating={data.rating} Descrpt={data.brand}   id={data.id}  /> )})}
          </div>
         }
        </div>
        <div className="footer">
          <h4 id="hel"> Powered by Innovation, Designed for You</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
