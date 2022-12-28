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
  farmAlgorithm,
  running,
  setFarmRunning
}) {
  farmAlgorithm = farmAlgorithm?.replaceAll("_", " ").replace("ALGORITHM", "").toLowerCase()
  farmAlgorithm = farmAlgorithm?.charAt(0).toUpperCase() + farmAlgorithm?.slice(1);
  const runCondition = consumptionDevicesNum &&
      measurementDevicesNum &&
      usersNum &&
      farmName &&
      farmAlgorithm
  return (
      <DashboardLayout>
        <DashboardNavbar/>
        <MDBox py={3}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                    color={farmName ? "success" : "error"}
                    icon="home"
                    title="Solar Farm"
                    count={farmName || "Define farm"}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                    color={measurementDevicesNum ? "success" : "error"}
                    icon="bolt"
                    title="Measurement Devices"
                    count={measurementDevicesNum || "Add measurement devices"}
                    percentage={{
                      color: `${measurementActiveDevicesNum ? "success" : "error"}`,
                      amount: measurementActiveDevicesNum || "No",
                      label: "active devices",
                    }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                    color={consumptionDevicesNum ? "success" : "error"}
                    icon="lightbulb"
                    title="Consumption Devices"
                    count={consumptionDevicesNum || "Add consumption devices"}
                    percentage={{
                      color: `${consumptionActiveDevicesNum ? "success" : "error"}`,
                      amount: consumptionActiveDevicesNum || "No",
                      label: "active devices",
                    }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                    color={usersNum ? "success" : "error"}
                    icon="person_add"
                    title="Users"
                    count={usersNum || "Define users"}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                    color={farmAlgorithm ? "success" : "error"}
                    icon="motion_photos_auto"
                    title="Algorithm"
                    count={farmAlgorithm || "No defined algorithm"}
                />
              </MDBox>
            </Grid>
          </Grid>
          <MDBox mt={4.5}>
            <MDBox mb={3}>
              <ReportsBarChart color={runCondition ? "success" : "error"} setFarmRunning={setFarmRunning}
                               running={running}/>
            </MDBox>
          </MDBox>
        </MDBox>
        <Footer/>
      </DashboardLayout>
  );
}

export default Dashboard;
