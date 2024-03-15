import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  itemId: string;
  itemSrc: string;
  title: string;
  price: number;
  size: string;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingIndex = state.cart.findIndex(
        (item) =>
          item.itemId === newItem.itemId &&
          item.price === newItem.price &&
          item.size === newItem.size &&
          item.itemSrc === newItem.itemSrc &&
          item.title === newItem.title,
      );
      if (existingIndex !== -1) {
        state.cart[existingIndex].quantity++;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.cart[index].quantity++;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
    getCart: (state) => {
      if (typeof localStorage !== "undefined") {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
          return { ...state, cart: JSON.parse(cartData) };
        }
      }
      return state;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
  getCart,
} = cartSlice.actions;

export default cartSlice.reducer;
