import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useShopify } from "../Hooks/useShopify";

function Auth() {
  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState();
  const params = useParams();
  const Shopify = useShopify(params.shop);
  const navigate = useNavigate();
  useEffect(() => {
    if (params.shop && params.code && params.state) {
      Shopify.exchange_temporary_token(params, function (err, data) {
        if (err) {
          setResponse(err);
          alert("installation failed");
        } else {
          setResponse("App installed successfully");
          navigate("/");
          alert("installation successful");
        }
        setLoading(false);
        // This will return successful if the request was authentic from Shopify
        // Otherwise err will be non-null.
        // The module will automatically update your config with the new access token
        // It is also available here as data['access_token']
      });
    } else {
      setLoading(false);
      setResponse("invalid parameters");
      alert("invalid parameters");
    }
  }, [params]);
  return <div>{isLoading ? <div>Loading...</div> : <div>{response}</div>}</div>;
}

export default Auth;
