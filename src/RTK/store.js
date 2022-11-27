import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products-slice";
import  cartReducer  from "./slices/Cart-slice";
// console.log(cartReducer);

export let store = configureStore({
    reducer: {
        products: productsReducer,
        carts: cartReducer,
    }
})