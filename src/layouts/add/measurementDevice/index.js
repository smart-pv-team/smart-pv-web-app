import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DeviceInfo from "./components/DeviceInfo";
import Action from "./components/Action";
import HttpHeaders from "./components/HttpHeaders";
import AddHttpHeader from "./components/AddHttpHeader";
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

function AddMeasurementDevice({addMeasuringDevice, farmsIds, deviceModels, devices, responseOptions}) {
  const schema = yup.object().shape({
    id: yup.string(),
    name: yup.string().required(),
    farmId: yup.string().required(),
    ipAddress: yup.string().required(),
    deviceModel: yup.string().required(),
    headers: yup.array().of(
        yup.object().shape({
          header: yup.string(),
          value: yup.string()
        })
    ),
    endpoint: yup.string().required(),
    httpMethod: yup.string().oneOf(["PATCH", "PUT", "GET", "POST"]).required(),
    description: yup.string(),
    responseClass: yup.string().required(),
    body: yup.string()
  });
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
    name: device.name,
    farmId: device.farmId,
    ipAddress: device.ipAddress,
    deviceModel: device.deviceModel,
    headers: Object.entries(device.endpoints.filter((e) => e.action === "READ").map((e) => e.httpHeaders)[0]).map(
        (e) => ({header: e[0], value: e[1][0]})),
    endpoint: device.endpoints.filter((e) => e.action === "READ")[0].endpoint,
    httpMethod: device.endpoints.filter((e) => e.action === "READ")[0].httpMethod,
    responseClass: device.endpoints.filter((e) => e.action === "READ")[0].responseClass,
    description: device.endpoints.filter((e) => e.action === "READ")[0].description,
    body: device.endpoints.filter((e) => e.action === "READ")[0].body,
  } : {}

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });
  const {fields, append, remove} = useFieldArray({name: 'headers', control});
  const onSubmitHandler = (data) => {
    console.log(data)
    addMeasuringDevice(data);
  };

  return (
      <DashboardLayout>
        <DashboardNavbar absolute isMini/>
        <MDBox mt={8}>
          <MDBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
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
                  <Grid item xs={12} md={6}>
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
                <Action errors={errors} control={control} register={register} responseOptions={responseOptions}/>
              </Grid>
            </Grid>
          </MDBox>
          <MDBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <HttpHeaders remove={remove} httpHeaders={fields} fullWidth required/>
              </Grid>
              <Grid item xs={12} md={5}>
                <AddHttpHeader append={append} httpHeaders={fields} fullWidth register={register}
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
