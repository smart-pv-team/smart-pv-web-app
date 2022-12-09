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
import Divider from "@mui/material/Divider";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Overview page components
// Data

// Images
import Header from "./components/Header";
import ProfileInfoCard from "../../examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "../../examples/Lists/ProfilesList";
import kuba from "assets/images/kuba.jpeg";
import adam from "assets/images/adam.jpeg";

function AboutUs() {

  const profiles = [
    {
      image: kuba,
      name: "Jakub Janicki",
      description: "Backend Developer",
      gitHubLink: "https://github.com/JanickiJ"

    },
    {
      image: adam,
      name: "Adam Przywieczerski",
      description: "Frontend Developer",
      gitHubLink: "https://github.com/Monatyr"
    }
  ]

  return (
      <DashboardLayout>
        <DashboardNavbar/>
        <MDBox mb={2}/>
        <Header>
          <MDBox mt={5} mb={3}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} xl={4} sx={{display: "flex"}}>
                <Divider orientation="vertical" sx={{ml: -2, mr: 1}}/>
                <ProfileInfoCard
                    title="profile information"
                    description="We are students that decided to develop this product as a batchelor thesis"
                    info={{
                      fullName: "SmartPV Team",
                      University: "AGH UST",
                      email: "smart-pv@gmail.com",
                      location: "Poland",
                    }}
                    social={[
                      {
                        link: "https://github.com/smart-pv-team",
                        icon: <GitHubIcon/>,
                        color: "facebook",
                      },
                    ]}
                    action={{route: "", tooltip: "Edit Profile"}}
                    shadow={false}
                />
                <Divider orientation="vertical" sx={{mx: 0}}/>
              </Grid>
              <Grid item xs={12} xl={4}>
                <ProfilesList title="Team members" profiles={profiles} shadow={false}/>
              </Grid>
            </Grid>
          </MDBox>
        </Header>
        <Footer/>
      </DashboardLayout>
  );
}

export default AboutUs;
