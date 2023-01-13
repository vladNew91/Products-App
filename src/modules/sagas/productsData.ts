import axios, { AxiosResponse, AxiosError } from "axios";
import { call, CallEffect, put, PutEffect } from "redux-saga/effects";
import { ProductsData } from "../../types";
import {
  productsDataFailure,
  productsDataSuccess,
  ProductsDataFailure,
  ProductsDataSuccess,
} from "../actions";

const API = "https://reqres.in/api/products";

export interface Response<T> {
  data: T;
}

function requestProductsData() {
  return axios(API);
}

export default function* ProductsDataRequestSaga(): Generator<
  | CallEffect<AxiosResponse<ProductsData>>
  | PutEffect<ProductsDataSuccess | ProductsDataFailure>
> {
  try {
    const { data } = (yield call(
      requestProductsData,
    )) as Response<ProductsData>;

    yield put(productsDataSuccess(data));
  } catch (error) {
    yield put(productsDataFailure(error as AxiosError));
  }
}
