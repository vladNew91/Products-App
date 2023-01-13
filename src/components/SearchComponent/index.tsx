import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FilterListIcon from "@mui/icons-material/FilterList";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface SearchComponentProps {
  value: string | undefined;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
  value,
  handleChangeValue,
}: SearchComponentProps): JSX.Element => {
  return (
    <Search>
      <SearchIconWrapper>
        <FilterListIcon />
      </SearchIconWrapper>

      <StyledInputBase
        placeholder="Filter by ID"
        inputProps={{ "aria-label": "filter" }}
        value={value}
        onChange={handleChangeValue}
      />
    </Search>
  );
};
