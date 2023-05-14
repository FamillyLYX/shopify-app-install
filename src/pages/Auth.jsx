import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { APIKEY, SECRET_KEY, useShopify } from "../Hooks/useShopify";

function Auth() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState();
  const params = Array.from(searchParams.entries()).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {}
  );
  const Shopify = useShopify(params.shop);
  const navigate = useNavigate();
  useEffect(() => {
    if (params.shop && params.code && params.state) {
      fetch(
        `https://${params.shop}/admin/oauth/access_token?code=${params.code}&client_id=${APIKEY}&client_secret=${SECRET_KEY}&shop=${params.shop}`,
        { method: "POST" }
      )
        .then((response) => response.json())
        .then((data) => {
          setResponse("App installed successfully", data.access_token);
          navigate("/");
          alert("installation successful");
          // Save the access token to your database for future requests
        })
        .catch((error) => {
          setResponse("Installation failed");
          alert("installation failed");
          console.error(error);
        });

      setLoading(false);
      // This will return successful if the request was authentic from Shopify
      // Otherwise err will be non-null.
      // The module will automatically update your config with the new access token
      // It is also available here as data['access_token']
    } else {
      setLoading(false);
      setResponse("invalid parameters");
      alert("invalid parameters");
    }
  }, [params]);
  return <div>{isLoading ? <div>Loading...</div> : <div>{response}</div>}</div>;
}

export default Auth;
