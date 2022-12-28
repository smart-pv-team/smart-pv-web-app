import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import HttpHeader from "../HttpHeader";
import React from "react";

function HttpHeaders({remove, httpHeaders}) {
  return (
      <Card id="delete-account">
        <MDBox pl={1} pt={3} px={2}>
          <MDTypography variant="h6" fontWeight="medium">
            Http Headers
          </MDTypography>
        </MDBox>
        <MDBox pt={1} pb={2} px={2}>
          <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            {Object.entries(httpHeaders).map(([idx, httpHeader]) => {
              return (<HttpHeader
                  key={httpHeader.id}
                  httpHeader={httpHeader}
                  remove={() => remove(idx)}
                  header={httpHeader.header}
                  value={httpHeader.value}
              />)
            })}
          </MDBox>
        </MDBox>
      </Card>
  );
}

export default HttpHeaders;
