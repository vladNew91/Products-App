import { memo } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { productsDataReguest } from "../../helpers";
import { selectSearchProductId } from "../../modules/selectors";
import { ProductsData } from "../../types";
import {
  ProductsTableComponent,
  ErrorAlertComponent,
  TableSceletonComponent,
} from "../../components";

export const ProductsTableContainer: React.FC = memo((): JSX.Element => {
  const searchedProductId = useSelector(selectSearchProductId);

  const { data, isLoading, isError, error } = useQuery<ProductsData, Error>(
    "products",
    productsDataReguest,
  );

  return (
    <>
      {isLoading && <TableSceletonComponent />}
      {isError && <ErrorAlertComponent error={error.message} />}

      {data && (
        <ProductsTableComponent
          productsData={data}
          searchedProductId={searchedProductId}
        />
      )}
    </>
  );
});
