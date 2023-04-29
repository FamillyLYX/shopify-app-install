import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ShopifyAPI from "shopify-node-api";
import { useShopify } from "../Hooks/useShopify";

function Install() {
  const navigate = useNavigate();
  const createAuth = useCallback(() => {
    var Shopify = useShopify();
    console.log(Shopify.buildAuthURL());
    window.location.href = Shopify.buildAuthURL();
  }, []);
  return (
    <div>
      <div className="uppercase font-bold text-6xl">Welcome</div>
      <div>
        <button
          onClick={() => {
            createAuth();
          }}
          className="bg-blue-500 text-white rounded-none mt-10 text-lg focus:outline-0 focus:border-0"
        >
          Install
        </button>
      </div>
    </div>
  );
}

export default Install;
