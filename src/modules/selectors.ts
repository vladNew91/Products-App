import { AxiosError } from "axios";
import { RootState } from ".";
import { ProductsData } from "../types";

export const selectProductsData = (
  state: RootState,
): ProductsData | undefined => state.productsData.data;

export const selectSearchProductId = (state: RootState): number | undefined =>
  state.productsData.searchProductId;

// export const selectLoadingProductsData = (state: RootState): boolean =>
//   state.productsData.loading;

export const selectProductsDataError = (
  state: RootState,
): AxiosError | undefined => state.productsData.error;
