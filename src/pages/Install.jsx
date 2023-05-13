import React, { useEffect, useState } from "react";
import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import ShopifyAPI from "shopify-node-api";
import { useShopify } from "../Hooks/useShopify";
import { useLocation, useParams } from "react-router-dom";

function Install() {
  const location = useLocation();
  console.log(location.search);
  const searchParams = new URLSearchParams(location.search);
  const queryParam = searchParams.get("shop");
  const { shop } = useParams();
  const [Shop, setShop] = useState(queryParam ?? "familylukso.myshopify.com");
  const createAuth = useCallback(() => {
    var Shopify = useShopify(Shop);
    console.log(Shopify.buildAuthURL());
    window.location.href = Shopify?.buildAuthURL();
  }, [Shop]);
  console.log(shop);

  // useEffect(() => {
  //   if (queryParam) {
  //     setShop(queryParam);
  //   }
  // }, [queryParam]);
  return (
    <div>
      <div className="uppercase font-bold text-6xl">Welcome</div>
      <div>
        <div>Enter your shopify shop URL</div>
        <input
          className="block mt-10 mx-auto"
          type="text"
          value={Shop}
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
