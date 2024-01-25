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
  },
});

export const { clearCart, removeItem } = cartSlice.actions;
// console.log(cartSlice);
export default cartSlice.reducer;
