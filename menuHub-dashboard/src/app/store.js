import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slices/categorySlice";

// Global store
export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
