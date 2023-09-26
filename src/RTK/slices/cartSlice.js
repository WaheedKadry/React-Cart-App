import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      console.log(findProduct);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        let productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((e) => e.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
  extraReducers: {},
});

export let { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
