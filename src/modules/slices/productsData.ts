import { createSlice } from "@reduxjs/toolkit";

export interface ProductsDataState {
  searchProductId?: number;
}

const initialState: ProductsDataState = {};

export const productsDataSlice = createSlice({
  name: "productsData" as string,
  initialState,
  reducers: {
    searchProductId(state, action) {
      return {
        ...state,
        searchProductId: action.payload,
      };
    },
  },
});

export const { searchProductId } = productsDataSlice.actions;
