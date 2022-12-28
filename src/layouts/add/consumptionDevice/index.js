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
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import React, {useEffect, useState} from "react";
import CustomSelector from "../../../components/MDSelector";
import {useParams} from "react-router-dom";
import AddHttpHeader from "./components/AddHttpHeader";
import DeviceInfo from "./components/DeviceInfo";
import AddAction from "./components/Action";
import Actions from "./components/Actions";

function AddConsumptionDevice({updateConsumingDevice, farmsIds, deviceModels, devices, responseOptions}) {
  const schema = yup.object().shape({
    id: yup.string(),
    deviceModel: yup.string().required(),
    endpoints: yup.array().of(
        yup.object().shape({
          action: yup.string().required(),
          description: yup.string(),
          endpoint: yup.string(),
          httpHeaders: yup.object(),
          httpMethod: yup.string().oneOf(["PATCH", "PUT", "GET", "POST"]).required(),
          responseClass: yup.string(),
          body: yup.string()
        })
    ),
    name: yup.string().required(),
    farmId: yup.string().required(),
    ipAddress: yup.string().required(),
    isOn: yup.boolean()
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
    isOn: device.isOn,
  } : {}
  const [endpoints, setEndpoints] = useState(id ? device.endpoints : []);
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
    console.log("ADD HEADE");
    console.log(data);
    setEndpoints((endpoints) => {
      let endpoint = endpoints.filter((e) => e.action === data.action)[0]
      const idx = endpoints.indexOf(endpoint)
      if (idx === -1) {
        return endpoints
      }
      const httpHeaders = endpoint.httpHeaders || {}
      httpHeaders[data.header] = [data.value]
      console.log(httpHeaders)
      endpoint = {
        ...endpoint,
        httpHeaders: httpHeaders
      }
      endpoints[idx] = endpoint
      console.log(endpoints)

      return endpoints
    })
  };

  useEffect(() => {
    setValue("endpoints", endpoints)
  }, [endpoints])

  const addAction = (data) => {
    setEndpoints((endpoints) => {
      const endpoint = {
        ...data,
        httpHeaders: data.httpHeaders || {}
      }
      return [
        ...endpoints,
        endpoint
      ]
    })
  }
  const removeHttpHeader = (header, action) => {
    console.log("remove http header")
    console.log(header)
    setEndpoints((endpoints) => {
      let endpoint = endpoints.filter(e => e.action === action)[0]
      let httpHeaders = endpoint.httpHeaders
      delete httpHeaders[Object.keys(header)[0]]
      const idxEndpoints = endpoints.indexOf(endpoint)
      endpoints[idxEndpoints] = {...endpoint, httpHeaders: httpHeaders}
      return endpoints
    })
  }
  const removeAction = (action) => {
    setEndpoints((endpoints) => {
      return endpoints.filter(e => e.action !== action)
    })

  }
  const onSubmitHandler = (data) => {
    console.log("onSubmitHandler")
    console.log(data)
    updateConsumingDevice(data);
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
              <Grid md={12} item>
                <AddHttpHeader
                    actions={endpoints.length === 0 ? ["First specify action"] : endpoints.map(e => e.action)}
                    addHeader={addHeader}/>
              </Grid>
            </Grid>
            <Grid container item justifyContent="flex-start" lg={6} sm={12} spacing={2}>
              <Grid md={12} item>
                <AddAction addAction={addAction} responseOptions={responseOptions}/>
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
