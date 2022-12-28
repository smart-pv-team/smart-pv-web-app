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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDButton from "../../components/MDButton";
import Icon from "@mui/material/Icon";
import consumptionDevicesTable from "./consumptionDevicesTable"
import {Link} from "react-router-dom";

function Consumption({devices, deleteConsumingDevice}) {
  const {columns, rows} = consumptionDevicesTable(devices, deleteConsumingDevice);

  return (
      <DashboardLayout>
        <DashboardNavbar/>
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                >
                  <MDBox px={2} display="flex" justifyContent="space-between" alignItems="center">
                    <MDTypography variant="h6" color="white">
                      Consumption Devices
                    </MDTypography>

                    <MDTypography component={Link}
                                  to="/add-consumption-device" variant="body1" color="white">
                      <MDButton variant="gradient" color="white">
                        <Icon sx={{fontWeight: "bold"}}>add</Icon>
                        &nbsp;add new device
                      </MDButton>
                    </MDTypography>

                  </MDBox>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                      table={{columns, rows}}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer/>
      </DashboardLayout>
  );
}

export default Consumption;