import { Action } from "@reduxjs/toolkit";
import axios, { AxiosResponse, AxiosError } from "axios";
import { call, CallEffect, put, PutEffect } from "redux-saga/effects";
import { productsDataFailure, productsDataSuccess } from "../slices";
import { ProductsData } from "../../types";

const API = "https://reqres.in/api/products";
axios.defaults.headers["X-API-KEY"] = "reqres-free-v1";

function productsDataReguest() {
  return axios({
    method: "get",
    url: API,
    headers: {
      "x-api-key": "reqres_b442a7b8934f478aa35707eee7d4bcad",
      "Content-Type": "application/json",
    },
  });
}

export default function* ProductsDataRequestSaga(): Generator<
  CallEffect<AxiosResponse<ProductsData>> | PutEffect<Action>
> {
  try {
    const { data } = (yield call(productsDataReguest)) as ProductsData;

    yield put(productsDataSuccess(data));
  } catch (error) {
    yield put(productsDataFailure(error as AxiosError));
  }
}
