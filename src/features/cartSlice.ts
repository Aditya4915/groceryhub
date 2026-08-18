import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProductType {
  id: string;
  name: string;
  weight: string;
  MRP: number;
  discount: number;
  price: number;
  quantity: number;
}
interface ProductState {
  items: ProductType[];
}

const initialState: ProductState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<Omit<ProductType, "quantity">>,
    ) => {
      const product = state.items.find(
        (item) => item.id === action.payload.name,
      );
      if (product) {
        product.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        if (product.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload,
          );
        } else {
          product.quantity -= 1;
        }
      }
    },
  },
});
export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
