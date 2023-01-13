import { AxiosError } from "axios";
import { ProductsDataAction } from "../actions";
import { ProductsData } from "../../types";
import {
  SEARCH_PRODUCT_ID,
  PRODUCTS_DATA_FAILURE,
  PRODUCTS_DATA_REQUEST,
  PRODUCTS_DATA_SUCCESS,
} from "../constants";

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

export const ProductsDataReducer = (
  //  eslint-disable-next-line  @typescript-eslint/default-param-last
  state: ProductsDataState = initialState,
  action: ProductsDataAction,
): ProductsDataState => {
  switch (action.type) {
    case PRODUCTS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        failure: false,
        error: undefined,
      };
    case PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
      };
    case PRODUCTS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        failure: true,
        success: false,
        error: action.error,
      };
    case SEARCH_PRODUCT_ID:
      return {
        ...state,
        searchProductId: action.id,
      };
    default:
      return state;
  }
};
