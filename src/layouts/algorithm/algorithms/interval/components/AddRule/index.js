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
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";
// Billing page components
import Grid from "@mui/material/Grid";
import MDButton from "../../../../../../components/MDButton";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import CustomSelector from "../../../../../../components/MDSelector";
import React from "react";

function AddRule({addInterval, devices, intervals, setInterval}) {

  const schema = yup.object().shape({
    device: yup.string().required(),
    action: yup.string().required(),
    interval: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log(data)
    addInterval(data)
    reset();
  };
  //TODO only ui
  devices = [1, 2, 3];
  intervals = [1, 2, 3];
  const actions = [1, 2, 3];
  return (
      <Card sx={{mb: 3, p: 2}}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2} pl={3}>
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Rule
          </MDTypography>
          <MDBox display="flex" alignItems="flex-start">
            <MDButton variant="gradient" color="dark" onClick={handleSubmit(onSubmitHandler)}>
              <Icon sx={{fontWeight: "bold"}}>add</Icon>
              &nbsp;Add new rule
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <CustomSelector control={control} errors={errors}
                              icon={<Icon sx={{color: 'action.active'}}>microwave_icon</Icon>}
                              id="device" label="Device" options={devices}/>
            </Grid>
            <Grid item xs={12} md={12}>
              <CustomSelector control={control} errors={errors}
                              icon={<Icon sx={{color: 'action.active'}}>keyboard_double_arrow_right_icon</Icon>}
                              id="action" label="Action" options={actions}/>
            </Grid>
            <Grid item xs={12} md={12}>
              <CustomSelector control={control} errors={errors}
                              icon={<Icon sx={{color: 'action.active'}}>density_large_icon</Icon>}
                              id="interval" label="Interval" options={intervals}/>
            </Grid>
          </Grid>
        </MDBox>
      </Card>
  );
}

export default AddRule;
