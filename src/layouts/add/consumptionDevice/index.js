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
import Icon from "@mui/material/Icon";
import MDTypography from "../../../components/MDTypography";
import Card from "@mui/material/Card";
import {Button} from "@mui/material";
import * as yup from "yup";
import {useFieldArray, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import React, {useState} from "react";
import CustomSelector from "../../../components/MDSelector";
import {useParams} from "react-router-dom";
import AddHttpHeader from "./components/AddHttpHeader";
import DeviceInfo from "./components/DeviceInfo";
import Action from "./components/Action";
import Actions from "./components/Actions";

function AddConsumptionDevice({addNewDevice, farmsIds, deviceModels, devices, responseOptions}) {
  const schema = yup.object().shape({
    id: yup.string(),
    deviceModel: yup.string().required(),
    endpoints: yup.array().of(
        yup.object().shape({
          action: yup.string().required(),
          description: yup.string(),
          endpoint: yup.string(),
          headers: yup.array().of(
              yup.object().shape({
                header: yup.string(),
                value: yup.string()
              })
          ),
          httpMethod: yup.string().oneOf(["PATCH", "PUT", "GET", "POST"]).required(),
          responseClass: yup.string()
        })
    ),
    name: yup.string().required(),
    farmId: yup.string().required(),
    ipAddress: yup.string().required(),
  })

  const {id} = useParams();

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const device = id ? devices.filter((ob) => ob.id === id)[0] : undefined
  const defaultValues = device ? {
    id: id,
    deviceModel: device.deviceModel,
    endpoints: device.endpoints,
    name: device.name,
    farmId: device.farmId,
    ipAddress: device.ipAddress,
  } : {}
  const [endpoints,setEndpoints] = useState(id? device.endpoints : []);
  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
      setValue
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const addHeader = (data) => {
    setEndpoints((endpoints) => {
      let endpoint = endpoints.filter((e)=>e.action === data.action)
      let headers = endpoint.headers
      let header = {[data.header]: data.value}
      headers.indexOf(header) === -1 ? headers.push(header) : undefined
      return {
        endpoints,
        endpoint: {
          ...endpoint,
          headers: headers
        }
      }
    })
    setValue("endpoints", endpoints)
  };

  const addAction = (data) => {
    setEndpoints((endpoints) => {
      const endpoint = {
        action: data.action,
        description: data.description,
        endpoint: data.endpoint,
        headers: {},
        httpMethod: data.httpMethod,
        responseClass: data.responseClass
      }
      return {
        endpoints,
        endpoint
      }
    })
    setValue("endpoints", endpoints)
  }
  const removeHttpHeader = (data) => {}
  const removeAction = (data) => {}
  const onSubmitHandler = (data) => {
    console.log(data)
    console.log(endpoints)
    addNewDevice(data);
  };

  return (
      <DashboardLayout>
        <DashboardNavbar absolute isMini/>
        <MDBox mt={8}>
          <Grid container spacing={3}>
            <Grid container lg={6} sm={12} spacing={3} item sx={{justifyContent: 'space-evenly'}}>
              <Grid item md={6} sm={12}>
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
                  <MDBox pb={2} textAlign="center" justifyContent="center">
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
              <Grid item md={6} sm={12}>
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
                  <MDBox pb={2} textAlign="center" lineHeight={1.25}>
                    <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                      Save
                    </MDTypography>
                  </MDBox>
                </Card>
              </Grid>
              <Grid md={12} item>
                <DeviceInfo farmsIds={farmsIds} control={control} register={register} errors={errors}/>
              </Grid>

            </Grid>
            <Grid container item justifyContent="flex-start" lg={6} sm={12} spacing={2}>
              <Grid md={12} item>
                <AddHttpHeader addHeader={addHeader}/>
              </Grid>
              <Grid md={12} item>
                <Action addAction={addAction} responseOptions={["SUPLA_CONSUMPTION_READ_ROW01", "SUPLA_CONSUMPTION_ON_ROW01", "SUPLA_CONSUMPTION_OFF_ROW01"]}/>
              </Grid>
            </Grid>
            <Grid item sm={12}>
                  <Actions endpoints={endpoints} removeAction={removeAction} removeHttpHeader={removeHttpHeader}/>
            </Grid>
          </Grid>

        </MDBox>
        <Footer/>
      </DashboardLayout>
  );
}

export default AddConsumptionDevice;
