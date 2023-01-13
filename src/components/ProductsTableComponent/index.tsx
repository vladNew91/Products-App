import { useState, useCallback, useMemo } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Product, ProductsData } from "../../types";
import { ModalComponent } from "../ModalComponent";

const defaultPage = 0;
const defaultRows = 5;

interface ProductsTableComponentProps {
  productsData: ProductsData;
  searchedProductId: number | undefined;
}

export const ProductsTableComponent: React.FC<ProductsTableComponentProps> = ({
  productsData,
  searchedProductId,
}: ProductsTableComponentProps): JSX.Element => {
  const [page, setPage] = useState<number>(defaultPage);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Product>();
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultRows);

  const handleToggleModal = useCallback(
    () => setOpenModal((state) => !state),
    [],
  );

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(defaultPage);
    },
    [],
  );

  const filteredData = useMemo(() => {
    if (!searchedProductId) return productsData.data;
    return productsData.data.filter((el) => el.id === searchedProductId);
  }, [productsData.data, searchedProductId]);

  return (
    <>
      <Paper sx={{ m: 3 }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: 100 }} align="left">
                  ID
                </TableCell>

                <TableCell align="left">Name</TableCell>
                <TableCell align="right">Year</TableCell>
              </TableRow>
            </TableHead>

            {productsData.data && (
              <TableBody>
                {filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        sx={{ background: `${row.color}` }}
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                        onClick={() => {
                          setSelectedRow(row);
                          handleToggleModal();
                        }}
                      >
                        <TableCell align="left" scope="row">
                          {row.id}
                        </TableCell>

                        <TableCell align="left" scope="row">
                          {row.name}
                        </TableCell>

                        <TableCell align="right" scope="row">
                          {row.year}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            )}
          </Table>

          <TablePagination
            page={page}
            component="div"
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            count={filteredData.length}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[
              defaultRows,
              { label: "All", value: productsData.data.length },
            ]}
          />
        </TableContainer>
      </Paper>

      {selectedRow && (
        <ModalComponent
          data={selectedRow}
          open={openModal}
          handleToggleModal={handleToggleModal}
        />
      )}
    </>
  );
};
