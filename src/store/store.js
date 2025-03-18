import { configureStore } from "@reduxjs/toolkit";
import reducerHeart from "./reducer";
import WishListProducts from "./wishListReducer";
import  cartreducer  from "./cartReducer";

export const store = configureStore({
    reducer: {
        heart: reducerHeart,
        items: WishListProducts.reducer,
        cart: cartreducer,
    }
});