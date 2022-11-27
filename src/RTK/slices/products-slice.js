import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    let res = await fetch("http://localhost:3000/products");
    let data = await res.json();
    return data;
  }
);

export let productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchProducts.pending, (state, action) => {
    //    show loader here make loading to wait api in UI
    //    console.log(" loading pending");
    // });
    // fulfilled means api is already here
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Logic Here
      // state = action.payload;//if choose this wrong don't add api on global state
      return action.payload;
      // console.log(action);
    });
    // rejected means mission failed can't get api
    builder.addCase(fetchProducts.rejected, (state, action) => {
      // show Error
      console.error(" Mr.Waheed => mission failed can't get api");
    });
  },
});
export const {} = productsSlice.actions;
export default productsSlice.reducer;
