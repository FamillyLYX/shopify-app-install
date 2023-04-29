import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useShopify } from "../Hooks/useShopify";

function Auth() {
  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState();
  const params = useParams();
  const Shopify = useShopify();
  Shopify.exchange_temporary_token(query_params, function (err, data) {
    if (err) {
      setResponse(err);
      alert("installation failed");
    } else {
      setResponse(data);
      alert("installation successful");
    }
    setLoading(false);
    // This will return successful if the request was authentic from Shopify
    // Otherwise err will be non-null.
    // The module will automatically update your config with the new access token
    // It is also available here as data['access_token']
  });
  return <div>{isLoading ? <div>Loading...</div> : <div>{response}</div>}</div>;
}

export default Auth;
