/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Images
import Icon from "@mui/material/Icon";
import MDButton from "../../../../../../../../components/MDButton";

export default function actionDateToTableFormat(headers, deleteHeader) {
  const Device = ({name}) => (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <Icon fontSize="small">http_icon</Icon>
        <MDBox ml={2} lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {name}
          </MDTypography>
        </MDBox>
      </MDBox>
  );
  return {
    columns: [
      {Header: "header", accessor: "header", width: "25%", align: "left"},
      {Header: "value", accessor: "value", align: "left"},
      {Header: "delete", accessor: "delete", align: "center"},
    ],

    rows: headers.map((header) => {
      return (
          {
            header: (<Device name={header.header} />),
            value: (
                <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
                  {header.value}
                </MDTypography>
            ),
            delete: (
                <MDBox ml={-1}>
                  <MDButton variant="text" color="error" onClick={() => deleteHeader("header.id")}>
                    <Icon>delete</Icon>
                  </MDButton>
                </MDBox>
            ),
          })
    }),
  };
}
