import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { takeEvery } from "@redux-saga/core/effects";
import { PRODUCTS_DATA_REQUEST } from "./constants";
import { ProductsDataReducer } from "./reducers";
import { ProductsDataRequestSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

//  create store
export const store = configureStore({
  reducer: {
    productsData: ProductsDataReducer,
  },
  middleware: () => middleware,
});

export type RootState = ReturnType<typeof store.getState>;

// preparing sagas
function* appSaga() {
  yield takeEvery(PRODUCTS_DATA_REQUEST, ProductsDataRequestSaga);
}

// runs sagas
sagaMiddleware.run(appSaga);
