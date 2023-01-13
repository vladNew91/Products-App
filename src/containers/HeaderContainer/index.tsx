import { useState, useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { searchProductId } from "../../modules/actions";
import { HeaderComponent } from "../../components";
import { deleteNonNumbers } from "../../helpers";

export const HeaderContainer: React.FC = memo((): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(deleteNonNumbers(e.target.value));
      dispatch(searchProductId(+deleteNonNumbers(e.target.value)));
    },
    [dispatch],
  );

  return (
    <HeaderComponent value={value} handleChangeValue={handleChangeValue} />
  );
});
