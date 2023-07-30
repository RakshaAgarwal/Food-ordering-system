import React, { useState } from "react";
import Login from './Login';
import Home from './Home';
import ShopList from './ShopList'
import ShopMenu from './ShopMenu'
import {  Routes, Route, useNavigate } from "react-router-dom"

function App() {
  const [shop, setShop] = useState([]);
  const navigate = useNavigate();

  function onShopClick(event){
    setShop(event)
    navigate('/shop/menu')
  }

  return (
    <div className="App">
      <header className="App-header">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Login heading="Create an Account" action="signup" />} />
          <Route path="/login" element={<Login heading="Login" action="login" />} />
          <Route path="/shops" element={<ShopList onShopClick={event => onShopClick(event)} />} />
          <Route path="/shop/menu" element={<ShopMenu shop={shop} />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
