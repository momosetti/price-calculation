import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../utils/dataMock";
const initialState = {
  productData: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductData: (state) => {
      return {
        ...state.productData,
        productData,
      };
    },
  },
});

export const { fetchProductData } = productSlice.actions;

export default productSlice.reducer;
