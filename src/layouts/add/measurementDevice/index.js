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

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import DeviceInfo from "layouts/add/measurementDevice/components/DeviceInfo";
import Action from "layouts/add/measurementDevice/components/Action";
import HttpHeaders from "layouts/add/measurementDevice/components/HttpHeaders";
import AddHttpHeader from "layouts/add/measurementDevice/components/AddHttpHeader";
import Icon from "@mui/material/Icon";
import MDTypography from "../../../components/MDTypography";
import Card from "@mui/material/Card";
import {Button} from "@mui/material";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import React, {useState} from "react";
import pattern from "assets/images/illustrations/supla_mew_01.jpeg";
import CustomSelector from "../../../components/MDSelector";

function AddMeasurementDevice({addNewDevice, farmsIds, deviceModels, edit, values}) {
  const schema = yup.object().shape({
    name: yup.string().required(),
    farm: yup.string().required(),
    ipAddress: yup.string().required(),
    deviceModel: yup.string().required(),
    headers: yup.array(),
    endpoint: yup.string().required(),
    httpMethod: yup.string().oneOf(["PATCH", "PUT", "GET", "POST"]).required(),
    description: yup.string().required()
  });
  const [open, setOpen] = useState(false);
  const [httpHeaders, setHttpHeaders] = useState([])

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    data = {
      ...data,
      headers: httpHeaders
    }
    console.log(data)
    addNewDevice(data);
  };

  return (
      <DashboardLayout>
        <DashboardNavbar absolute isMini/>
        <MDBox mt={8}>
          <MDBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} xl={4}>
                    <Card>
                      <MDBox
                          width="100%"
                          height="100%"
                          opacity={1}
                          component="img"
                          src={pattern}
                          alt="Device picture"
                          sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: "17rem",
                          }}
                      >
                      </MDBox>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} xl={4}>
                    <Card>
                      <MDBox p={2} mx={2} display="flex" justifyContent="center">
                        <Button variant="contained" size="large" onClick={handleOpen}>
                          <MDBox
                              display="grid"
                              justifyContent="center"
                              alignItems="center"
                              bgColor="info"
                              color="white"
                              width="8rem"
                              height="6rem"
                              shadow="md"
                              borderRadius="lg"
                              variant="gradient"
                          >
                            <Icon fontSize="large">bolt</Icon>
                          </MDBox>
                        </Button>
                      </MDBox>
                      <MDBox pb={2} px={0} textAlign="center" justifyContent="center">
                        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                          Select Device Model
                        </MDTypography>
                        <CustomSelector gridProps={{pl: "25px"}} control={control} errors={errors}
                                        id="deviceModel" label="" options={deviceModels}
                                        open={open} onOpen={handleOpen} onClose={handleClose}
                        />
                      </MDBox>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} xl={4}>
                    <Card>
                      <MDBox p={2} mx={2} display="flex" justifyContent="center">
                        <Button variant="contained" size="large" onClick={handleSubmit(onSubmitHandler)}>
                          <MDBox
                              display="grid"
                              justifyContent="center"
                              alignItems="center"
                              bgColor="info"
                              color="white"
                              width="8rem"
                              height="11rem"
                              shadow="md"
                              borderRadius="lg"
                              variant="gradient"
                          >
                            <Icon fontSize="large">add</Icon>
                          </MDBox>
                        </Button>
                      </MDBox>
                      <MDBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
                        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                          Save
                        </MDTypography>
                      </MDBox>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <DeviceInfo farmsIds={farmsIds} control={control} register={register} errors={errors}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Action errors={errors} control={control} register={register}/>
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <HttpHeaders setHttpHeaders={setHttpHeaders} httpHeaders={httpHeaders} fullWidth required/>
              </Grid>
              <Grid item xs={12} md={5}>
                <AddHttpHeader setHttpHeaders={setHttpHeaders} httpHeaders={httpHeaders} fullWidth register={register}
                               required/>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
        <Footer/>
      </DashboardLayout>
  );
}

export default AddMeasurementDevice;
