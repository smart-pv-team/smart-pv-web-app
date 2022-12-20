/**
 =========================================================
 * Material Dashboard 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import {useEffect, useMemo, useState} from "react";

// prop-types is a library for typechecking of props
// react-table components
import {useGlobalFilter, usePagination, useSortBy, useTable} from "react-table";

// @mui material components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Icon from "@mui/material/Icon";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDPagination from "components/MDPagination";

// Material Dashboard 2 React example components
import DataTableHeadCell from "examples/Tables/DataTable/DataTableHeadCell";
import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell";

function DataTable({
  canSearch,
  showTotalEntries,
  noEndBorder,
  table,
  actions,
}) {
  const entries = Array.from({length: actions.length}, (_, i) => i + 1)
  const [action,setAction] = useState(1);
  const columns = useMemo(() => table.columns, [table]);
  const data = useMemo(() => table.rows, [table]);
  const pageOptions = actions.map((i) => i.id);
  const tableInstance = useTable(
      {columns, data},
      useGlobalFilter,
      useSortBy,
      usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    setPageSize,
    setGlobalFilter,
    state: {globalFilter},
  } = tableInstance;

  useEffect(() => setPageSize(100), []);

  const renderPagination = pageOptions.map((option) => (
      <MDPagination
          item
          key={option}
          onClick={() => setAction(option)}
          active={action === option}
      >
        {option}
      </MDPagination>
  ));

  const handleInputPagination = ({target: {value}}) =>
      value > pageOptions.length || value < 0 ? setAction(1) : setAction(Number(value));
  const handleInputPaginationValue = ({target: value}) => setAction(Number(value.value));

  const getAction = (_action) => actions.find(i => i.id === _action).action

  return (
      <TableContainer sx={{boxShadow: "none"}}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="h6" fontWeight="medium">
              Action {getAction(action)}
            </MDTypography>

          </MDBox>
          <MDBox display="flex" alignItems="center">
            <Autocomplete
                disableClearable
                value={action.toString()}
                options={entries.map(i => i.toString())}
                onChange={(event, newValue) => {
                  setAction(parseInt(newValue));
                }}
                size="small"
                sx={{width: "5rem"}}
                renderInput={(params) => <MDInput {...params} />}
            />
            <MDTypography variant="caption" color="secondary">
              &nbsp;&nbsp;Action
            </MDTypography>
          </MDBox>
        </MDBox>
        <Table {...getTableProps()}>
          <MDBox component="thead">
            {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                      <DataTableHeadCell
                          {...column.getHeaderProps()}
                          width={column.width ? column.width : "auto"}
                          align={column.align ? column.align : "left"}
                      >
                        {column.render("Header")}
                      </DataTableHeadCell>
                  ))}
                </TableRow>
            ))}
          </MDBox>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, key) => {
              prepareRow(row);
              return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                        <DataTableBodyCell
                            noBorder={noEndBorder && rows.length - 1 === key}
                            align={cell.column.align ? cell.column.align : "left"}
                            {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </DataTableBodyCell>
                    ))}
                  </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <MDBox
            display="flex"
            flexDirection="row-reverse"
            justifyContent="space-between"
            alignItems={{xs: "flex-start", sm: "center"}}
            p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
        >
          {pageOptions.length > 1 && (
              <MDPagination
                  variant={"gradient"}
                  color={"info"}
              >
                {action > 1 && (
                    <MDPagination item onClick={() => setAction(action - 1)}>
                      <Icon sx={{fontWeight: "bold"}}>chevron_left</Icon>
                    </MDPagination>
                )}
                {renderPagination.length > 6 ? (
                    <MDBox width="5rem" mx={1}>
                      <MDInput
                          inputProps={{type: "number", min: 1, max: pageOptions.length}}
                          value={pageOptions[action]}
                          onChange={(handleInputPagination, handleInputPaginationValue)}
                      />
                    </MDBox>
                ) : (
                    renderPagination
                )}
                {action < actions.length && (
                    <MDPagination item onClick={() => setAction(action + 1)}>
                      <Icon sx={{fontWeight: "bold"}}>chevron_right</Icon>
                    </MDPagination>
                )}
              </MDPagination>
          )}
        </MDBox>
      </TableContainer>
  );
}

export default DataTable;
