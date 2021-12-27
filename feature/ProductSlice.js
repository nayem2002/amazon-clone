import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const featchProduct = createAsyncThunk(
  'product/fatchProduct',
  async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
  }
);

const initialState = {
  product: [],
  status: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [featchProduct.pending]: (state, { payload }) => {
      state.status = 'pending';
      state.product = payload;
    },
    [featchProduct.fulfilled]: (state, { payload }) => {
      state.status = 'sucess';
      state.product = payload;
    },
    [featchProduct.rejected]: (state, { payload }) => {
      state.status = 'rejected';
    },
  },
});

export default productSlice.reducer;
