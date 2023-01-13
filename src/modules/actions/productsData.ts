import { AxiosError } from "axios";
import { Action } from "redux";
import { ProductsData } from "../../types";
import {
  PRODUCTS_DATA_FAILURE,
  PRODUCTS_DATA_REQUEST,
  PRODUCTS_DATA_SUCCESS,
  SEARCH_PRODUCT_ID,
} from "../constants";

export interface ProductsDataRequest extends Action {
  type: typeof PRODUCTS_DATA_REQUEST;
}

export interface ProductsDataSuccess extends Action {
  type: typeof PRODUCTS_DATA_SUCCESS;
  data: ProductsData;
}

export interface ProductsDataFailure extends Action {
  type: typeof PRODUCTS_DATA_FAILURE;
  error: AxiosError;
}
export interface SearchProductId extends Action {
  type: typeof SEARCH_PRODUCT_ID;
  id: number;
}

export type ProductsDataAction =
  | ProductsDataRequest
  | ProductsDataSuccess
  | ProductsDataFailure
  | SearchProductId;

export const productsDataRequest = (): ProductsDataRequest => ({
  type: PRODUCTS_DATA_REQUEST,
});

export const productsDataSuccess = (
  data: ProductsData,
): ProductsDataSuccess => ({
  type: PRODUCTS_DATA_SUCCESS,
  data,
});

export const productsDataFailure = (
  error: AxiosError,
): ProductsDataFailure => ({
  type: PRODUCTS_DATA_FAILURE,
  error,
});

export const searchProductId = (id: number): SearchProductId => ({
  type: SEARCH_PRODUCT_ID,
  id,
});
