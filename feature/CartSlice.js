import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
  basketTotalItem: 0,
  basketTotalAmount: 0,
  user: null,
};

const CartSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addToCart: (state, action) => {
      const index = state.basket.findIndex((carentElement) => {
        return carentElement.id === action.payload.id;
      });
      if (index >= 0) {
        state.basket[index].cartQuintity += 1;
      } else {
        const newProduct = { ...action.payload, cartQuintity: 1 };
        state.basket.push(newProduct);
      }
    },
    dicrementQuintity: (state, action) => {
      const index = state.basket.findIndex((carent) => {
        return carent.id === action.payload.id;
      });
      if (state.basket[index].cartQuintity > 1) {
        state.basket[index].cartQuintity -= 1;
      } else if (state.basket[index].cartQuintity === 1) {
        const newItem = state.basket.filter((carent) => {
          return carent.id !== action.payload.id;
        });
        state.basket = newItem;
      }
    },
    removeItem: (state, action) => {
      const newProduct = state.basket.filter((carent) => {
        return carent.id !== action.payload.id;
      });
      state.basket = newProduct;
    },

    cartTotalItemAndAmount: (state, action) => {
      const { initialItem, initialAmount } = state.basket.reduce(
        (acomolator, carent) => {
          const { cartQuintity, price } = carent;

          const totalPrice = cartQuintity * price;

          acomolator.initialItem += cartQuintity;
          acomolator.initialAmount += totalPrice;

          return acomolator;
        },
        {
          initialItem: 0,
          initialAmount: 0,
        }
      );
      state.basketTotalItem = initialItem;
      state.basketTotalAmount = initialAmount;
    },
  },
});

export const {
  setUser,
  addToCart,
  dicrementQuintity,
  removeItem,
  cartTotalItemAndAmount,
} = CartSlice.actions;

export default CartSlice.reducer;
