import { configureStore } from "@reduxjs/toolkit";
import { productsDataSlice } from "./slices";

export const store = configureStore({
  reducer: {
    productsData: productsDataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
