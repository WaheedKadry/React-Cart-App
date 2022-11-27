import { createSlice } from "@reduxjs/toolkit";

export let cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      // state.push(action.payload);
     let findProduct = state.find((product) => product.id === action.payload.id)
     console.log(findProduct);
     if (findProduct) {
      findProduct.quantity += 1
    }else {
      let productClone = {...action.payload, quantity: 1}
      state.push(productClone)
      


     }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});
export let { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
