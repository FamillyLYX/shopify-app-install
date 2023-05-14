import ShopifyAPI from "shopify-node-api";
export const APIKEY = import.meta.env.VITE_SHOPIFY_API_KEY;
export const SECRET_KEY = import.meta.env.VITE_SHOPIFY_SHARED_SECRET;

export const useShopify = (shop) => {
  if (APIKEY && SECRET_KEY) {
    return new ShopifyAPI({
      shop: shop, // MYSHOP.myshopify.com
      shopify_api_key: APIKEY, // Your API key
      shopify_shared_secret: SECRET_KEY, // Your Shared Secret
      shopify_scope: "write_products",
      redirect_uri: `${window.location.origin}/auth`,
      nonce: "1", // you must provide a randomly selected value unique for each authorization request
    });
  } else {
    console.log("apikey is undefined");
  }
};
