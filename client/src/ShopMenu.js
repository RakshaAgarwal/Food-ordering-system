// import React, { useState, useEffect } from "react";
function ShopMenu({shop}) {
  // const [data, setData] = useState([]);

  // const fetchShopList = async () => {
  //   return await fetch("http://localhost:3005/shops", {
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((d) => setData(d));
  // };
  // useEffect(() => {
  //   fetchShopList();
  // }, []);
  return (
    <div>
      <h1>List of Restaurants</h1>
      {shop.ShopName}

      {/* {data.map((dataObj, index) => {
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
          >
            <p style={{ fontSize: 20, color: "white" }}>{dataObj.ShopName}</p>
          </div>
        );
      })} */}
    </div>
  );
}
export default ShopMenu;
