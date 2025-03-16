import { configureStore } from "@reduxjs/toolkit";
import reducerHeart from "./reducer";
import WishListProducts from "./wishListReducer";

export const store = configureStore({
    reducer: {
        heart: reducerHeart,
        items: WishListProducts.reducer,
    }
})