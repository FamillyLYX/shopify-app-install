import React, { useState } from "react";
import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import ShopifyAPI from "shopify-node-api";
import { useShopify } from "../Hooks/useShopify";

function Install() {
  const [shop, setShop] = useState("familylukso.myshopify.com");
  const createAuth = useCallback(() => {
    var Shopify = useShopify(shop);
    console.log(Shopify.buildAuthURL());
    window.location.href = Shopify?.buildAuthURL();
  }, []);
  return (
    <div>
      <div className="uppercase font-bold text-6xl">Welcome</div>
      <div>
        <div>Enter your shopify shop URL</div>
        <input
          className="block mt-10 mx-auto"
          type="text"
          value={shop}
          onChange={(e) => setShop(e.target.value)}
        ></input>
        <button
          onClick={() => {
            createAuth();
          }}
          className="bg-blue-500 text-white rounded-none mt-5 text-lg focus:outline-0 focus:border-0"
        >
          Install
        </button>
      </div>
    </div>
  );
}

export default Install;
