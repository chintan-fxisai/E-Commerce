import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductDetailSlice';
import authReducer from './loginSlice'

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
});

export default store;