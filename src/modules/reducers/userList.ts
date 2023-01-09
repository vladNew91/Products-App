import { AxiosError } from "axios";
import { UserListAction } from "../actions";
import { User } from "../../types";
import {
  USER_LIST_FAILURE,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from "../constants";

export interface UserListState {
  loading: boolean;
  success: boolean;
  failure: boolean;
  data?: User[];
  error?: AxiosError;
}

const initialState: UserListState = {
  loading: false,
  success: false,
  failure: false,
};

export const UserListReducer = (
  //  eslint-disable-next-line  @typescript-eslint/default-param-last
  state: UserListState = initialState,
  action: UserListAction,
): UserListState => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        failure: false,
        error: undefined,
      };
    case USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
      };
    case USER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        failure: true,
        success: false,
        error: action.error,
      };
    default:
      return state;
  }
};
