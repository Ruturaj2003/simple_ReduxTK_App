import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      // acess items via state if u directly it will only delte one
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      console.log(state.cartItems);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);

      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);

      cartItem.amount = cartItem.amount - 1;
    },
  },
});

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;
// console.log(cartSlice);
export default cartSlice.reducer;
