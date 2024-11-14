import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = JSON.parse(localStorage.getItem("products")) ?? {
  products: [],
  allProducts: 0,
  price: 0,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct : (state, {payload})=>{
      const alreadyItem = state.products.find((prod)=> prod.id === payload.id)
      if(alreadyItem){
        toast.warn("Product already added to your cart !")
      }
      else{
        state.products = [...state.products, payload]
        toast.success("Product added")
        ProductSlice.caseReducers.calculateTotal(state)
      }
    },
    removeProduct: (state, {payload})=>{
      state.products = state.products.filter((prod)=> prod.id !== payload)
      ProductSlice.caseReducers.calculateTotal(state)
    },
    incrementAmount: (state, {payload})=>{
      const item = state.products.find((product)=>product.id === payload)
      item.amount += 1;
      ProductSlice.caseReducers.calculateTotal(state)
    },
    decrementAmount: (state, {payload})=>{
      const item = state.products.find((product)=>product.id === payload)
      item.amount -= 1;
      ProductSlice.caseReducers.calculateTotal(state)
    },
    calculateTotal: (state)=>{
      let allProductsCounter = 0;
        let allPrice = 0

        state.products.forEach(product => {
          allProductsCounter += product.amount;
          allPrice += product.price*product.amount
        });

        state.allProducts = allProductsCounter;
        state.price = allPrice
        
        localStorage.setItem("products", JSON.stringify(state))
    }
  }
})

export default ProductSlice.reducer
export const {addProduct, removeProduct, incrementAmount, decrementAmount} = ProductSlice.actions
