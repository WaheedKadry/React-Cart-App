import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export let fetchPoducts = createAsyncThunk(
  "productSlice/fetchPoducts",
  async () => {
    let res = await fetch("https://apitest-c64g.onrender.com/products");
    let data = await res.json();
    return data;
  }
);
export let productSlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {},
  extraReducers: {
    [fetchPoducts.fulfilled]: (state, action) => {
      console.log(action);
      return action.payload;
    },
  },
});
export let {} = productSlice.actions;
export default productSlice.reducer;
