import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    //actions
    addToCategories: (state, action) => {
      // .push() doesnt work cause it would try mutate array
      //  this way we assign new arr
      state.categories = [...state.categories, action.payload];
    },
    addMultipleToCategories: (state, action) => {
      state.categories = [...state.categories, ...action.payload];
    },
    removeFromCategories: (state, action) => {
      state.categories = state.categories.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  addToCategories,
  removeFromCategories,
  addMultipleToCategories,
} = categorySlice.actions;

// Selectors -  This is how to pull information from the Global store slice
// state.basket is coming from app/store.js file reducers:{ basket :}
export const selectCategories = (state) => state.category.categories;

export default categorySlice.reducer;
