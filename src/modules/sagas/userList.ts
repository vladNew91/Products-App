import axios, { AxiosResponse, AxiosError } from "axios";
import { call, CallEffect, put, PutEffect } from "redux-saga/effects";
import { User } from "../../types";
import {
  userListFailure,
  userListSuccess,
  UserListFailure,
  // UserListRequest,
  UserListSuccess,
} from "../actions";

export interface Response<T> {
  data: T;
}

function requestUserList() {
  return axios("https://jsonplaceholder.typicode.com/users");
}

export default function* UserListRequestSaga(): Generator<
  // action: UserListRequest,
  | CallEffect<AxiosResponse<User[]>>
  | PutEffect<UserListSuccess | UserListFailure>
> {
  try {
    const { data } = (yield call(requestUserList)) as Response<User[]>;

    yield put(userListSuccess(data));
  } catch (error) {
    yield put(userListFailure(error as AxiosError));
  }
}
