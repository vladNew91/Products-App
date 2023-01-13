import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Theme } from "@mui/material";

export const LoadingComponent: React.FC = (): JSX.Element => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme: Theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
