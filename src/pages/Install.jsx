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

  useEffect(() => {
    if (queryParam) {
      createAuth();
    }
  }, [shop]);
  return (
    <div>
      <div className="uppercase font-bold text-6xl">Welcome</div>
      {queryParam ? <div>Installing</div> : <div>No shop is added</div>}
      <div>
        <div>
          <div className="mt-5 font-bold text-lg">Scopes</div>
          <div className="flex gap-4 flex-wrap max-w-md">
            <li>Read Products</li>
            <li>Write Checkouts</li>
            <li>Write Ordes</li>
            <li>Access payment mandate scopes(Make Payments)</li>
          </div>
        </div>
        {/* <button
          onClick={() => {
            createAuth();
          }}
          className="bg-blue-500 text-white rounded-none mt-5 text-lg focus:outline-0 focus:border-0"
        >
          Install
        </button> */}
      </div>
    </div>
  );
}

export default Install;
