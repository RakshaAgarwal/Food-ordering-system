import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
function ShopList({onShopClick}) {
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
//   function onShopClick(shop){
//     console.log(shop)
//   }
  useEffect(() => {
    fetchShopList();
  }, []);
  return (
    <div>
      <h1>List of Restaurants</h1>

      {data.map((dataObj, index) => {
        return (
          <div
            key={index}
            style={{
              width: "15em",
              backgroundColor: "#35D841",
              padding: 2,
              borderRadius: 10,
              marginBlock: 10,
            }}
            onClick={() => onShopClick(dataObj)}
          >
            <p style={{ fontSize: 20, color: "white" }}>{dataObj.ShopName}</p>
          </div>
        );
      })}
    </div>
  );
}
export default ShopList;
