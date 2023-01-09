import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { userListRequest } from "../../modules/actions";
import { HomeComponent } from "../../components";

export const HomeContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleLoadList = useCallback(
    () => dispatch(userListRequest()),
    [dispatch],
  );

  return <HomeComponent handleLoadList={handleLoadList} />;
};
