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

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";
import PauseIcon from '@mui/icons-material/Pause';
// react-chartjs-2 components
// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// ReportsBarChart configurations
import Grid from "@mui/material/Grid";
import {Button} from "@mui/material";
import IconButton from "@mui/material/IconButton";

function ReportsBarChart({color}) {
  return (
      <Card sx={{height: "100%"}}>
        <MDBox padding="1rem">
          <Grid container spacing={4} justifyContent="flex-start">
            <Grid item>
              <MDBox
                  variant="gradient"
                  bgColor={color}
                  color={color === "light" ? "dark" : "white"}
                  coloredShadow={color}
                  borderRadius="xl"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  py={2}
                  pr={0.5}
                  mt={-5}
                  width="8rem"
                  height="8rem"
              >
                <IconButton size="large" fontSize="large" color="inherit">
                  <PauseIcon/>
                </IconButton>
              </MDBox>
            </Grid>
            <Grid item>
              <MDBox pt={2} pb={1} px={1}>
                <MDTypography variant="h4" textTransform="capitalize">
                  Run Farm Management
                </MDTypography>
              </MDBox>
            </Grid>
          </Grid>
          <MDBox pt={3} pb={1} px={1}>
            <MDTypography component="div" variant="button" color="text" fontWeight="light">
              Run or stop your farm management. Before clicking make sure that below steps were performed correctly
            </MDTypography>
            <MDTypography component="div" variant="button" color="text" fontWeight="light">1. Farm setup</MDTypography>
            <MDTypography component="div" variant="button" color="text" fontWeight="light">2. Measurement devices
              setup</MDTypography>
            <MDTypography component="div" variant="button" color="text" fontWeight="light">3. Consumption devices
              setup</MDTypography>
            <MDTypography component="div" variant="button" color="text" fontWeight="light">4. Algorithm
              setup</MDTypography>
            <MDTypography component="div" variant="button" color="text" fontWeight="light">
              If run button is disabled it means that data validation throws and error and you need to check data
              correctness</MDTypography>
          </MDBox>
        </MDBox>
      </Card>
  );
}

// Setting default values for the props of ReportsBarChart
ReportsBarChart.defaultProps = {
  color: "dark",
  description: "",
};

// Typechecking props for the ReportsBarChart
ReportsBarChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default ReportsBarChart;
