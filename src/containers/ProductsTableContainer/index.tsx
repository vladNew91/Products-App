import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsDataRequest } from "../../modules/actions";
import {
  selectProductsDataError,
  selectProductsData,
  selectSearchProductId,
} from "../../modules/selectors";
import { ProductsTableComponent, ErrorAlertComponent } from "../../components";

export const ProductsTableContainer: React.FC = memo((): JSX.Element | null => {
  const productsData = useSelector(selectProductsData);
  const searchedProductId = useSelector(selectSearchProductId);
  const error = useSelector(selectProductsDataError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsDataRequest());
  }, [dispatch]);

  if (!productsData) return null;

  return (
    <>
      <ProductsTableComponent
        productsData={productsData}
        searchedProductId={searchedProductId}
      />

      {error && <ErrorAlertComponent error={error.message} />}
    </>
  );
});
