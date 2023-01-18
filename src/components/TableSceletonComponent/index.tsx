import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

export const TableSceletonComponent: React.FC = (): JSX.Element => {
  return (
    <Skeleton
      animation="pulse"
      variant="rectangular"
      sx={{ m: "24px" }}
      height={400}
    />
  );
};
