import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: true,
  error: null,
  success: false,
  product:{},
 // Initialize resultPerPage
};

export const productReducers = createReducer(initialState, {
  getAllProductRequest: (state) => {
    state.loading = true;
  },

  getAllProductSuccess: (state, action) => {
    state.loading = false;
  state.products = action.payload.products;
  state.success = true;
  state.productsCount = action.payload.productsCount; // Update productsCount
  state.resultPerPage = action.payload.resultPerPage;
  state.filteredProductsCount=action.payload.filteredProductsCount;
  },

  getAllProductFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.success = true;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});


export const productDetailsReducers = createReducer(initialState, {
    productDetailsRequest: (state) => {
      state.loading = true;
    },
  
    productDetailsSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.success = true;
      
    },
  
    productDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = true;
    },
  
    clearErrors: (state) => {
      state.error = null;
    },
  });