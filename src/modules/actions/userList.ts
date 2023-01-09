import { AxiosError } from "axios";
import { Action } from "redux";
import { User } from "../../types";
import {
  USER_LIST_FAILURE,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from "../constants";

export interface UserListRequest extends Action {
  type: typeof USER_LIST_REQUEST;
}

export interface UserListSuccess extends Action {
  type: typeof USER_LIST_SUCCESS;
  data: User[];
}

export interface UserListFailure extends Action {
  type: typeof USER_LIST_FAILURE;
  error: AxiosError;
}

export type UserListAction =
  | UserListRequest
  | UserListSuccess
  | UserListFailure;

export const userListRequest = (): UserListRequest => ({
  type: USER_LIST_REQUEST,
});

export const userListSuccess = (data: User[]): UserListSuccess => ({
  type: USER_LIST_SUCCESS,
  data,
});

export const userListFailure = (error: AxiosError): UserListFailure => ({
  type: USER_LIST_FAILURE,
  error,
});
