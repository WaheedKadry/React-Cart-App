import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
let store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});

export default store;
