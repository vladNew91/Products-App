import { AxiosError } from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../../types";

export interface ProductsDataState {
  loading: boolean;
  success: boolean;
  failure: boolean;
  data?: ProductsData;
  searchProductId?: number;
  error?: AxiosError;
}

const initialState: ProductsDataState = {
  loading: false,
  success: false,
  failure: false,
};

export const productsDataSlice = createSlice({
  name: "productsData" as string,
  initialState,
  reducers: {
    productsDataRequest() {},
    productsDataSuccess(state: ProductsDataState, action) {
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload as ProductsData,
      };
    },
    productsDataFailure(state: ProductsDataState, action) {
      return {
        ...state,
        loading: false,
        failure: true,
        success: false,
        error: action.payload as AxiosError,
      };
    },
    searchProductId(state, action) {
      return {
        ...state,
        searchProductId: action.payload,
      };
    },
  },
});

export const {
  productsDataRequest,
  productsDataSuccess,
  productsDataFailure,
  searchProductId,
} = productsDataSlice.actions;
