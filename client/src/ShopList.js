import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./home.scss";
function ShopList({ onShopClick }) {
  const [data, setData] = useState([]);

  const fetchShopList = async () => {
    return await fetch("http://localhost:3005/shops", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  useEffect(() => {
    fetchShopList();
  }, []);
  return (
    <div className="shop-page p-5">
      <h1 className="heading mb-5">
        Skip the Line, Savor the Taste: Your Food, Your Time, On-Demand!
      </h1>
<div className="d-flex">
      {data.map((dataObj, index) => {
        return (
          <div className="card mx-4 p-4" style={{ width: "28rem" }} key={index}  onClick={() => onShopClick(dataObj)}>
        <img src={require(`./assets/images/${dataObj.image}.png`)} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{dataObj.ShopName}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
         
        </div>
      </div>
        );
      })}
      </div>
    </div>
  );
}
export default ShopList;
