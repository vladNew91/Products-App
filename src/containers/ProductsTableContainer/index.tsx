import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsDataRequest } from "../../modules/slices";
import {
  selectProductsDataError,
  selectProductsData,
  selectSearchProductId,
} from "../../modules/selectors";
import {
  ProductsTableComponent,
  ErrorAlertComponent,
  TableSceletonComponent,
} from "../../components";

export const ProductsTableContainer: React.FC = memo((): JSX.Element => {
  const productsData = useSelector(selectProductsData);
  const searchedProductId = useSelector(selectSearchProductId);
  const error = useSelector(selectProductsDataError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsDataRequest());
  }, [dispatch]);

  return (
    <>
      {!productsData ? (
        <TableSceletonComponent />
      ) : (
        <ProductsTableComponent
          productsData={productsData}
          searchedProductId={searchedProductId}
        />
      )}

      {error && <ErrorAlertComponent error={error.message} />}
    </>
  );
});
