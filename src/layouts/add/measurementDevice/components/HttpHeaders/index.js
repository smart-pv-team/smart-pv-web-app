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

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import HttpHeader from "../HttpHeader";
import React from "react";

function HttpHeaders({httpHeaders, setHttpHeaders}) {
  return (
      <Card id="delete-account">
        <MDBox pl={1} pt={3} px={2}>
          <MDTypography variant="h6" fontWeight="medium">
            Http Headers
          </MDTypography>
        </MDBox>
        <MDBox pt={1} pb={2} px={2}>
          <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            {Object.entries(httpHeaders).map((header, key) => {
              return (<HttpHeader
                  key={key}
                  httpHeaders={httpHeaders}
                  setHttpHeaders={setHttpHeaders}
                  header={header[0]}
                  value={header[1]}
              />)
            })}
          </MDBox>
        </MDBox>
      </Card>
  );
}

export default HttpHeaders;
