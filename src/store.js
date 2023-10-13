import { configureStore } from "@reduxjs/toolkit";

import { productDetailsReducers, productReducers } from "./redux/reducers/productReducers";
import { forgotPasswordReducer, profileReducers, userReducers } from "./redux/reducers/userReducers";

const store = configureStore({
  reducer: {
    products: productReducers,
    productDetails:productDetailsReducers,
    user:userReducers,
    profile:profileReducers,
    forgotPassword:forgotPasswordReducer,
    
  },
});

export default store;
