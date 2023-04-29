import ShopifyAPI from "shopify-node-api";
const APIKEY = import.meta.env.VITE_SHOPIFY_API_KEY;

export const useShopify = () => {
  if (APIKEY) {
    return new ShopifyAPI({
      shop: "familylukso.myshopify.com", // MYSHOP.myshopify.com
      shopify_api_key: import.meta.env.VITE_SHOPIFY_API_KEY, // Your API key
      shopify_shared_secret: import.meta.env.VITE_SHOPIFY_SHARED_SECRET, // Your Shared Secret
      shopify_scope: "write_products",
      redirect_uri: `${window.location.origin}/finish_auth`,
      nonce: "1", // you must provide a randomly selected value unique for each authorization request
    });
  } else {
    console.log("apikey is undefined");
  }
};
