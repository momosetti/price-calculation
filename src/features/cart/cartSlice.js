import { createSlice } from "@reduxjs/toolkit";
import {
  milkDiscountCalculation,
  beardDiscountCalculation,
} from "../../utils/discountCalculation";
const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, { payload }) => {
      // check whether the item exist on the basket
      const searchItem = state.cart.filter((item) => item.id === payload.id);

      /** Redux Toolkit allows us to write "mutating" logic in reducers. It
      doesn't actually mutate the state because it uses the Immer library,
      which detects changes to a "draft state" and produces a brand new
      immutable state based off those changes */
      if (searchItem.length === 0)
        state.cart.push({
          ...payload,
          quantity: 1,
          paidPrice: payload.price,
          discount: 0,
        });
    },
    updateItemQuantityandPrices: (state, { payload }) => {
      state.cart.map((item) => {
        // find the target product and increment/decrement its quantity
        if (item.id === payload.id) {
          switch (payload.action) {
            case "increment":
              item.quantity++;
              break;
            case "decrement":
              if (item.quantity != 1) {
                item.quantity--;
              }
              break;
            default:
              break;
          }

          // Maintain prices:
          // if the item is a milk product
          if (item.id === "2") {
            const { discountPrice, paidTotalPrice } = milkDiscountCalculation(
              item.quantity,
              item.price
            );
            item.paidPrice = parseFloat(paidTotalPrice.toFixed(2));
            item.discount = parseFloat(discountPrice.toFixed(2));
          }

          // if the item is a bread product
          if (item.id === "1") {
            // find the butter quantity
            let butterItemArray = state.cart.filter((item) => item.id === "3");
            let butterQuantity = butterItemArray[0]?.quantity;
            const { discountPrice, paidTotalPrice } = beardDiscountCalculation(
              butterQuantity ? butterQuantity : 0,
              item.quantity,
              item.price
            );
            item.paidPrice = parseFloat(paidTotalPrice.toFixed(2));
            item.discount = parseFloat(discountPrice.toFixed(2));
          }

          // if the butter quantity changed
          if (item.id === "3") {
            item.paidPrice = (item.price * item.quantity).toFixed(2);

            // due to the offer, butter quantity change will affect the beard discount
            // so maintaining the beard price is mandatory in this case.
            state.cart.map((product) => {
              if (product.id === "1") {
                const { discountPrice, paidTotalPrice } =
                  beardDiscountCalculation(
                    item.quantity,
                    product.quantity,
                    product.price
                  );
                product.paidPrice = parseFloat(paidTotalPrice.toFixed(2));
                product.discount = parseFloat(discountPrice.toFixed(2));
              }
            });
          }
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart, updateItemQuantityandPrices } =
  cartSlice.actions;

export default cartSlice.reducer;
