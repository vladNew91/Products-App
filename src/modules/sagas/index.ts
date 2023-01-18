import { takeEvery } from "redux-saga/effects";
import { productsDataRequest } from "../slices";
import ProductsDataRequestSaga from "./productsData";

export function* appSaga() {
  yield takeEvery(productsDataRequest.type, ProductsDataRequestSaga);
}
