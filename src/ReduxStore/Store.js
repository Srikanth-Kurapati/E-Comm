import { configureStore } from "@reduxjs/toolkit";
import products from './Reducercart'

const Store = configureStore({
    reducer:{
        cart : products
    }
})

export default Store