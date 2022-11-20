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
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";
// Billing page components
import MDButton from "../../../../../components/MDButton";
import Grid from "@mui/material/Grid";
import MDInput from "../../../../../components/MDInput";
import {useState} from "react";

function AddHttpHeader({append, httpHeaders}) {
  const [header, setHeader] = useState("")
  const [value, setValue] = useState("")
  const handleHeaderChange = (e) => {
    const data = e.target.value
    setHeader(data)
  }
  const handleValueChange = (e) => {
    const data = e.target.value
    setValue(data)
  }
  const handleAddNewHeader = () => {
    if (!httpHeaders.filter((ob) => ob.header === header).length) {
      append({
        header: header,
        value: value
      })
    }
  }
  return (
      <Card sx={{height: "100%"}}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2} pl={3}>
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Add Http Header
          </MDTypography>
          <MDBox display="flex" alignItems="flex-start">

            <MDButton variant="gradient" color="dark" onClick={handleAddNewHeader}>
              <Icon sx={{fontWeight: "bold"}}>add</Icon>
              &nbsp;add new http header
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MDBox
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={2}
              >
                <MDInput id="input-with-sx" label="Header" fullWidth variant="standard" onChange={handleHeaderChange}/>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MDBox
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={2}
              >
                <MDInput id="input-with-sx" label="Value" fullWidth variant="standard" onChange={handleValueChange}/>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </Card>
  );
}

export default AddHttpHeader;
