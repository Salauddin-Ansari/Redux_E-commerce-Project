import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} from "./slice/cartSlice";
import wishListReducer, {
  addWishListItem,
  removeWishListItem,
} from "./slice/wishListSlice";
import productReducer from "./slice/productSlice";

import { configureStore } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger";
import { apiMiddleware } from "./middleware/api";
import { func } from "./middleware/func";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  middleware: () => [apiMiddleware, func],
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
