import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import CustomSelector from "../../../../../components/MDSelector";
import React from "react";

function DeviceInfo({register, errors, control, farmsIds}) {
  return (
      <Card id="delete-account">
        <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="h6" fontWeight="medium">
            Device Info
          </MDTypography>
        </MDBox>
        <MDBox p={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <MDBox
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={2}
              >
                <Icon sx={{color: 'action.active', mr: 1, my: 0.5}}>
                  badgeicon
                </Icon>
                <MDInput id="name" label="Device name" fullWidth variant="standard"
                         error={errors["name"]?.message} {...register("name")} helperText={errors["name"]?.message}/>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={12}>
              <CustomSelector control={control} errors={errors}
                              icon={<Icon sx={{color: 'action.active'}}>home</Icon>}
                              id="farmId" label="FarmId" options={farmsIds}/>
            </Grid>
            <Grid item xs={12} md={12}>
              <MDBox
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={2}
              >
                <Icon sx={{color: 'action.active', mr: 1, my: 0.5}}>
                  language
                </Icon>
                <MDInput id="ipAddress" label="IP Address" fullWidth variant="standard"
                         error={errors["ipAddress"]?.message} {...register("ipAddress")}
                         helperText={errors["ipAddress"]?.message}/>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </Card>
  );
}

export default DeviceInfo;
