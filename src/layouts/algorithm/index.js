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

// @mui icons
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/algorithm/components/Header";

// Data
// Images
import AlgorithmCard from "./components/AlgorithmCard";

function Algorithm({algorithms, algorithm, setAlgorithm}) {
  return (
      <DashboardLayout>
        <DashboardNavbar/>
        <MDBox mb={2}/>
        <Header setAlgorithm={setAlgorithm} algorithms={algorithms} algorithm={algorithm}>
          <MDBox p={2}>
            <Grid container spacing={6}>
              {algorithms.map((algorithm) => {
                return (
                    <Grid item xs={12} md={6} xl={3}>
                      <AlgorithmCard
                          title={algorithm.name.replaceAll("_", " ")}
                          description={algorithm.description}
                          action={{
                            type: "internal",
                            route: "/algorithm" + algorithm.path,
                            color: "info",
                            label: "Setup",
                          }}
                      />
                    </Grid>
                );
              })}

            </Grid>
          </MDBox>
        </Header>
        <Footer/>
      </DashboardLayout>
  );
}

export default Algorithm;
