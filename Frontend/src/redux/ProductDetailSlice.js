import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProduct: null,
};

const ProductDetailSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = ProductDetailSlice.actions;
export default ProductDetailSlice.reducer;