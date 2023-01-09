import { RootState } from ".";
import { User } from "../types";

export const selectUserList = (state: RootState): User[] | undefined =>
  state.userList.data;

// export const selectLoadingUserList = (state: RootState): boolean =>
//   state.userList.loading;
