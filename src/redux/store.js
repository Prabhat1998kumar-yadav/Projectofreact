import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/porductSlice";
import singleProductSlice from "./slice/singleProductSlice";


export default configureStore({
    reducer:{
        productSlice,
        singleProductSlice
    }
})
