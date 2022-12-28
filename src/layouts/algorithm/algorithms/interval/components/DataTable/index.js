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

import {useEffect, useMemo} from "react";

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
import MDButton from "../../../../../../components/MDButton";

function DataTable({
  showTotalEntries,
  noEndBorder,
  table,
  setInterval,
  intervals,
  interval,
  deleteInterval
}) {
  const entries = intervals.map(i => i.name)

  const columns = useMemo(() => table.columns, [table]);
  const data = useMemo(() => table.rows, [table]);
  const pageOptions = intervals.map(i => i.name)
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
    state: {globalFilter},
  } = tableInstance;

  useEffect(() => setPageSize(100), []);

  const renderPagination = pageOptions.map((option) => (
      <MDPagination
          item
          key={option}
          onClick={() => setInterval(option)}
          active={interval === option}
      >
        {option}
      </MDPagination>
  ));

  const handleInputPagination = ({target: {value}}) => {
    value > pageOptions.length || value <= 1 ? setInterval(1) : setInterval(Number(value));
  }
  const handleInputPaginationValue = ({target: value}) => {
    setInterval(Number(value.value));
  }

  const getInterval = (e) => {
    return intervals.find(i => i.name === e)
  }
  console.log(interval)
  return (
      <TableContainer sx={{boxShadow: "none"}}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <MDBox display="flex" alignItems="center">
            <MDTypography variant="h6" fontWeight="medium">
              {getInterval(interval) ? "Interval number " + `${interval}` +
                  " [" + `${getInterval(interval).lowerBound}` + " kW, " + `${getInterval(interval).upperBound}`
                  + " kW]" : "No intervals defined"}
            </MDTypography>
            {getInterval(interval) ? <MDBox>
              <MDButton variant="text" color="error" onClick={() => deleteInterval(getInterval(interval).id)}>
                <Icon>delete</Icon>
              </MDButton>
            </MDBox> : <MDBox/>}
          </MDBox>
          <MDBox display="flex" alignItems="center">
            <Autocomplete
                disableClearable
                value={interval?.toString()}
                options={entries.map(i => i.toString())}
                onChange={(event, newValue) => {
                  setInterval(parseInt(newValue));
                }}
                size="small"
                sx={{width: "5rem"}}
                renderInput={(params) => <MDInput {...params} />}
            />
            <MDTypography variant="caption" color="secondary">
              &nbsp;&nbsp;Interval
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
                {interval > 1 && (
                    <MDPagination item onClick={() => setInterval((value) => value - 1)}>
                      <Icon sx={{fontWeight: "bold"}}>chevron_left</Icon>
                    </MDPagination>
                )}
                {renderPagination.length > 6 ? (
                    <MDBox width="5rem" mx={1}>
                      <MDInput
                          inputProps={{type: "number", min: 1, max: pageOptions.length}}
                          value={interval}
                          onChange={(handleInputPagination, handleInputPaginationValue)}
                      />
                    </MDBox>
                ) : (
                    renderPagination
                )}
                {interval < intervals.length && (
                    <MDPagination item onClick={() => setInterval((value) => value + 1)}>
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
