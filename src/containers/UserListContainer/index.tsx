import React from "react";
import { useSelector } from "react-redux";
import { UserListComponent } from "../../components";
import { selectUserList } from "../../modules/selectors";

export const UserListContainer: React.FC = (): JSX.Element | null => {
  const userList = useSelector(selectUserList);

  if (!userList) return null;

  return <UserListComponent userList={userList} />;
};
