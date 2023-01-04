import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Header from "layouts/algorithm/components/Header";
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
                    <Grid item xs={12} md={6} xl={4}>
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
