import MDTypography from "../../../../components/MDTypography";
import Grid from "@mui/material/Grid";
import DashboardNavbar from "../../../../examples/Navbars/DashboardNavbar";
import MDBox from "../../../../components/MDBox";
import Card from "@mui/material/Card";
import MDButton from "../../../../components/MDButton";
import Footer from "../../../../examples/Footer";
import DashboardLayout from "../../../../examples/LayoutContainers/DashboardLayout";
import MDInput from "../../../../components/MDInput";
import React from "react";
import * as yup from "yup";
import {useFieldArray, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";

export default function PriorityAlgorithm({consumptionDevices, setPriorityPower}) {

  const schema = yup.object().shape({
    devices: yup.array().of(
        yup.object().shape({
          id: yup.string().required(),
          power: yup.number().required(),
          priority: yup.number().required(),
          name: yup.string().required()
        })
    )
  });

  const defaultValues = {
    devices: consumptionDevices.map((device) => {
      return {
        id: device.id,
        power: device.controlParameters.powerConsumption,
        priority: device.controlParameters.priority,
        name: device.name
      }
    })
  }

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

  const {fields, append, prepend, remove, swap, move, insert} = useFieldArray(
      {
        control,
        name: "devices"
      }
  );

  const onSubmitHandler = (data) => {
    console.log(data)
    setPriorityPower(data);
  };

  const Device = ({device, idx}) => {
    const key = `devices[${idx}]`
    return (
        <MDBox mb={2} key={key}>
          <Grid container spacing={2}>
            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
              <MDTypography mt={2} display="block" variant="button" color="inherit">
                {device.name}
              </MDTypography>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <MDInput type="text" label="Power" variant="standard" fullWidth
                       error={errors[`${key}.power`]?.message} {...register(`${key}.power`)}
                       helperText={errors[`${key}.power`]?.message}
                       required/>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <MDInput type="text" label="Priority" variant="standard" fullWidth
                       error={errors[`${key}.priority`]?.message} {...register(`${key}.priority`)}
                       helperText={errors[`${key}.priority`]?.message}
                       required/>
            </Grid>
          </Grid>
        </MDBox>
    )
  }

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
                    Priority algorithm
                  </MDTypography>
                  <MDTypography display="block" variant="button" color="white" my={1}>
                    Algorithm that base on device priority and power. Favour devices with higher priority. Handle only
                    on/off actions
                  </MDTypography>
                </MDBox>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    {fields.map((item, idx) => {
                      return (
                          <Device device={item} idx={idx}></Device>
                      )
                    })}
                    <MDBox justifyContent='center'>
                      <MDTypography
                          component="a"
                          variant="button"
                          fontWeight="bold"
                          color="error"
                          textGradient
                      >
                        {Object.keys(errors).length !== 0 ? "Fill all fields with numbers" : ""}
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
  )
}
