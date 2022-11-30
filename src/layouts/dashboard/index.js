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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "./components/ReportsBarChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data

// Dashboard components

function Dashboard({
  consumptionDevicesNum,
  consumptionActiveDevicesNum,
  measurementDevicesNum,
  measurementActiveDevicesNum,
  usersNum,
  farmName,
  farmAlgorithm
}) {
  farmAlgorithm = farmAlgorithm.replaceAll("_", " ").replace("ALGORITHM", "").toLowerCase()
  farmAlgorithm = farmAlgorithm.charAt(0).toUpperCase() + farmAlgorithm.slice(1);
  return (
      <DashboardLayout>
        <DashboardNavbar/>
        <MDBox py={3}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                    color="success"
                    icon="home"
                    title="Solar Farm"
                    count={farmName}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                    color="success"
                    icon="bolt"
                    title="Measurement Devices"
                    count={measurementDevicesNum}
                    percentage={{
                      color: "success",
                      amount: measurementActiveDevicesNum,
                      label: "active devices",
                    }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                    color="success"
                    icon="lightbulb"
                    title="Consumption Devices"
                    count={consumptionDevicesNum}
                    percentage={{
                      color: "success",
                      amount: consumptionActiveDevicesNum,
                      label: "active devices",
                    }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                    color="success"
                    icon="person_add"
                    title="Users"
                    count={usersNum}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                    color="success"
                    icon="motion_photos_auto"
                    title="Algorithm"
                    count={farmAlgorithm}
                />
              </MDBox>
            </Grid>
          </Grid>
          <MDBox mt={4.5}>
            <MDBox mb={3}>
              <ReportsBarChart color="success"/>
            </MDBox>
          </MDBox>
        </MDBox>
        <Footer/>
      </DashboardLayout>
  );
}

export default Dashboard;
