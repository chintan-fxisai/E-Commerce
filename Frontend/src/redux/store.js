import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductDetailSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;