import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CategoryIcon from "@mui/icons-material/Category";
import { SearchComponent } from "../SearchComponent";

interface HeaderComponentProps {
  value: string;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  value,
  handleChangeValue,
}: HeaderComponentProps): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <CategoryIcon sx={{ mr: 1 }} />
          <Typography sx={{ flexGrow: 1 }}>Products</Typography>

          <SearchComponent
            value={value}
            handleChangeValue={handleChangeValue}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
