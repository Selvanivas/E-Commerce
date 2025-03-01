import React from 'react'
import Login from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Card from './Card';

function Pages() {
  return (
    <div>
         <BrowserRouter>
     <Routes>
     <Route path='/' element={<Login/>} ></Route>
        <Route path='/Login' element={<Login/>} ></Route>
        <Route path='/Home' element={<Home/>} ></Route>
        <Route  path='/Card' element={<Card/>}           ></Route>
     </Routes>
 </BrowserRouter>
    </div>
  )
}

export default Pages