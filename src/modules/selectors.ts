import { RootState } from ".";

export const selectSearchProductId = (state: RootState): number | undefined =>
  state.productsData.searchProductId;
