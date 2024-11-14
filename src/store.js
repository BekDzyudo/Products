import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./fetures/productsSlice"

export const store = configureStore({
    reducer: {
        products: productReducer
    }
})