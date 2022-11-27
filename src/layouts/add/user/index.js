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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import MDTypography from "../../../components/MDTypography";
import Card from "@mui/material/Card";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import React from "react";
import MDInput from "../../../components/MDInput";
import MDButton from "../../../components/MDButton";
import Grid from "@mui/material/Grid";

function AddUser({addUser}) {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required(),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log(data)
    addUser(data.name, data.email, data.password);
    reset();
  };

  return (
      <DashboardLayout>
        <DashboardNavbar absolute isMini/>
        <MDBox mt={8}>
          <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
            <Grid item xs={12} sm={10} md={8} lg={6} xl={5}>
              <Card>
                <MDBox
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="success"
                    mx={2}
                    mt={-3}
                    p={3}
                    mb={1}
                    textAlign="center"
                >
                  <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                    Add new user
                  </MDTypography>
                  <MDTypography display="block" variant="button" color="white" my={1}>
                    Password will not be visible after adding user
                  </MDTypography>
                </MDBox>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <MDBox mb={2}>
                      <MDInput type="text" label="Name" variant="standard" fullWidth
                               {...register("name")}
                               required/>
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput type="email" label="Email" variant="standard" fullWidth {...register("email")} required/>
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput type="password" label="Password" variant="standard" fullWidth {...register("password")}
                               required/>
                    </MDBox>
                    <MDBox justifyContent='center'>
                      <MDTypography
                          component="a"
                          variant="button"
                          fontWeight="bold"
                          color="error"
                          textGradient
                      >
                        {errors["email"]?.message || errors["password"]?.message || errors["name"]?.message}
                      </MDTypography>
                    </MDBox>
                    <MDBox mt={4} mb={1}>
                      <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit(onSubmitHandler)}
                      >
                        Save
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer/>
      </DashboardLayout>
  );
}

export default AddUser;
