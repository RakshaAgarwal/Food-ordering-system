import React, { useState } from "react";
import Login from './Login';
import Home from './Home';
import ShopList from './ShopList'
import ShopMenu from './ShopMenu'
import { BrowserRouter, Routes, Route } from "react-router-dom"



// function onShopClick(event){
//   console.log(event, 'here')
// }
function App() {
  const [shop, setShop] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Login heading="Create an Account" action="signup" />} />
          <Route path="/login" element={<Login heading="Login" action="login" />} />
          <Route path="/shops" element={<ShopList onShopClick={event => setShop(event)} />} />
          <Route path="/shop/menu" element={<ShopMenu shop={shop} />} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
