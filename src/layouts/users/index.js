import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDButton from "../../components/MDButton";
import Icon from "@mui/material/Icon";
import usersTable from "./usersTable"

import {Link} from "react-router-dom";

function Users({users, deleteUser}) {
  const {columns, rows} = usersTable(users, deleteUser);
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
                      Users
                    </MDTypography>
                    <MDTypography component={Link} to="/add-user" variant="body1" color="white">
                      <MDButton variant="gradient" color="white">
                        <Icon sx={{fontWeight: "bold"}}>add</Icon>
                        &nbsp;add new user
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

export default Users;
