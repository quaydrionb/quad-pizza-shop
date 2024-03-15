import { CartState } from "@/redux/cartSlice";
import { Action, ThunkAction } from "@reduxjs/toolkit";

export interface RootState {
  cart: CartState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;