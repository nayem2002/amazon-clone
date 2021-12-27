import { configureStore } from '@reduxjs/toolkit';
import porductReducer from '../feature/ProductSlice';
import cartReducer from '../feature/CartSlice';

export const store = configureStore({
  reducer: {
    products: porductReducer,
    cart: cartReducer,
  },
});
