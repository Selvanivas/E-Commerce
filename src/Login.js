import React from "react";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  var user = [
    { userName: "selvanivas", password: 123456 },
    { userName: "nivas", password: 12345678 },
  ];
  function userLogin(e) {
    e.preventDefault();
    if(userName==""){
      alert("enter username");
    }
    if(password==""){
      alert("enter passkey")
    }
    var x = user.filter(
      (data) => data.userName == userName && data.password == password
    );
    if (x.length>0) {
      if(x[0].password==password){
      localStorage.setItem("userName", userName);
      navigate('/Home')
    }
    }
  }
  return (
    <div>
    <div className="container"> 
    </div>
    <div className="loginpage">
 <div>
   <h1 id="heading">Log in</h1>
 </div>
  <div>
   <form onSubmit={userLogin}  id="formbox" >
     <input
       id="userName"
       value={userName}
       placeholder="enter your name"
       type="text"
       onChange={(e) => {
         setuserName(e.target.value);
       }}
     />
     <input
       id="password"
       value={password}
       placeholder="enter password"
       type="password"
       onChange={(e) => {
         setpassword(e.target.value);
       }}
     />
     <button type="submit">Log in</button>
   </form>
 
 </div>
 </div>
  </div>
  );
};

export default Login;
