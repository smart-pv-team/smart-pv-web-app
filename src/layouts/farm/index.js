import React from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import MDInput from "../../components/MDInput";
import Grid from "@mui/material/Grid";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Card from "@mui/material/Card";
import Footer from "../../examples/Footer";
import MDButton from "../../components/MDButton";
import Icon from "@mui/material/Icon";

export default function Farm({farm, setFarm}) {

  const schema = yup.object().shape({
    id: yup.string(),
    name: yup.string().required(),
    description: yup.string().required(),
    minutesBetweenDeviceStatusSwitch: yup.number().required(),
    minutesToAverageMeasurement: yup.number().required(),
    energyLimit: yup.number().required()
  });

  const defaultValues = farm ? {
    id: farm.id,
    name: farm.name,
    description: farm.description,
    minutesBetweenDeviceStatusSwitch: farm.minutesBetweenDeviceStatusSwitch,
    minutesToAverageMeasurement: farm.minutesToAverageMeasurement,
    energyLimit: farm.energyLimit
  } : {}

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmitHandler = (data) => {
    console.log(data)
    setFarm(data);
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
                    Farm
                  </MDTypography>
                  <MDTypography display="block" variant="button" color="white" my={1}>
                    You need to define your farm specification in order to delineate other objects
                  </MDTypography>
                </MDBox>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <MDBox
                        borderRadius="lg"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        pb={4}
                    >
                      <Icon sx={{color: 'action.active', mr: 1, my: 0.5}}>
                        home
                      </Icon>
                      <MDInput id="name" label="Farm name" fullWidth variant="standard"
                               error={errors["name"]?.message} {...register("name")}
                               helperText={errors["name"]?.message}/>
                    </MDBox>
                    <MDBox
                        borderRadius="lg"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        pb={4}>
                      <Icon sx={{color: 'action.active', mr: 1, my: 0.5}}>
                        badgeicon
                      </Icon>
                      <MDInput id="description" label="Description" fullWidth variant="standard"
                               error={errors["description"]?.message} {...register("description")}
                               helperText={errors["description"]?.message}/>
                    </MDBox>
                    <MDBox
                        borderRadius="lg"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        pb={4}>
                      <Icon sx={{color: 'action.active', mr: 1, my: 0.5}}>
                        access_time_icon
                      </Icon>
                      <MDInput id="minutesBetweenDeviceStatusSwitch" label="Minutes Between Device Status Switch"
                               fullWidth
                               variant="standard"
                               error={errors["minutesBetweenDeviceStatusSwitch"]?.message} {...register(
                          "minutesBetweenDeviceStatusSwitch")}
                               helperText={errors["minutesBetweenDeviceStatusSwitch"]?.message}/>
                    </MDBox>
                    <MDBox
                        borderRadius="lg"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        pb={4}>
                      <Icon sx={{color: 'action.active', mr: 1, my: 0.5}}>
                        do_disturb_on_icon
                      </Icon>
                      <MDInput id="energyLimit" label="Energy Limit" fullWidth variant="standard"
                               error={errors["energyLimit"]?.message} {...register("energyLimit")}
                               helperText={errors["energyLimit"]?.message}/>
                    </MDBox>
                    <MDBox
                        borderRadius="lg"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        pb={4}>
                      <Icon sx={{color: 'action.active', mr: 1, my: 0.5}}>
                        access_time_icon
                      </Icon>
                      <MDInput id="minutesToAverageMeasurement" label="Minutes To Average Measurement" fullWidth
                               variant="standard"
                               error={errors["minutesToAverageMeasurement"]?.message} {...register(
                          "minutesToAverageMeasurement")}
                               helperText={errors["minutesToAverageMeasurement"]?.message}/>
                    </MDBox>
                    <MDBox mt={4} mb={1}>
                      <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit(onSubmitHandler)}>
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
  )
}
