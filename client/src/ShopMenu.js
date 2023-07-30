import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useDispatch } from 'react-redux'
import { addToCart } from './actions/index'

function ShopMenu({ shop }) {
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch()

  const fetchShopList = async () => {
    return await fetch(`http://localhost:3005/menu/${shop._id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setMenu(d[0].menu);
      });
  };
  useEffect(() => {
    fetchShopList();
  }, []);
  return (
    <>
    <NavBar />
    <div className="menu shop-page">
    
      <img
        src={require(`./assets/images/${shop.image}.png`)}
        className="card-img-top"
        alt="..."
        width="200"
        height="400"
      />
      <h1 className="heading mt-5">{shop.ShopName}</h1>
      
<div className="d-flex">
      {menu.map((dataObj, index) => {
        return (
        <div className="card mx-5" style={{ width: "18rem" }} key={index}>
        <img
          src={require(`./assets/images/${dataObj.Image}.png`)}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p>{dataObj.ItemName}</p>
          <div className="d-flex justify-content-between">
            <p>Rs <span>{dataObj.ItemPrice}</span></p>
            <div>
            {dataObj.rating}
              <img
                width="10"
                height="10"
                alt="star"
                src={require(`./assets/images/star.png`)}
              ></img>
            </div>
          </div>
          <p className="card-text">
          {dataObj.description}
          </p>
          <button href="#" className="btn btn-primary" onClick={() => dispatch(addToCart(dataObj))}>
            Add to Cart
          </button>
        </div>
      </div>
          
        );
      })}
      </div>
    </div>
    </>
  );
}
export default ShopMenu;
