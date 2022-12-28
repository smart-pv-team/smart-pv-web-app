import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MDInput from "../../../../../components/MDInput";
import React from "react";
import CustomSelector from "../../../../../components/MDSelector";

function Action({register, errors, control, responseOptions}) {
  return (
      <Card sx={{height: "100%"}}>
        <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="h6" fontWeight="medium">
            Read Action Details
          </MDTypography>
        </MDBox>
        <MDBox p={1}>
          <Grid container spacing={1}>
            <Grid item xs={24} md={24}>
              <MDBox
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={2}
              >
                <Icon sx={{color: 'action.active', mr: 1, my: 0.5}}>
                  link
                </Icon>
                <MDInput id="name" label="Endpoint" fullWidth variant="standard"
                         error={errors["endpoint"]?.message} {...register("endpoint")}
                         helperText={errors["endpoint"]?.message}/> </MDBox>
            </Grid>
            <Grid item xs={24} md={24}>
              <CustomSelector control={control} errors={errors}
                              icon={<Icon sx={{color: 'action.active', my: 0.5}}>http</Icon>}
                              id="httpMethod" label="Select Http Method" options={["PATCH", "PUT", "GET", "POST"]}/>
            </Grid>
            <Grid item xs={24} md={24}>
              <CustomSelector control={control} errors={errors}
                              icon={<Icon sx={{color: 'action.active', my: 0.5}}>http</Icon>}
                              id="responseClass" label="Select Response Class" options={responseOptions}/>
            </Grid>
            <Grid item xs={24} md={24}>
              <MDBox
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={2}
              >
                <Icon sx={{color: 'action.active', mr: 1, my: 0.5}}>
                  assignment
                </Icon>
                <MDInput id="name" label="Description" fullWidth variant="standard"
                         error={errors["description"]?.message} {...register("description")}
                         helperText={errors["description"]?.message}/>
              </MDBox>
            </Grid>
            <Grid item xs={24} md={24}>
              <MDBox
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={2}
              >
                <Icon sx={{color: 'action.active', mr: 1, my: 0.5}}>
                  document_scanner_icon
                </Icon>
                <MDInput id="body" label="Body" fullWidth multiline rows={3} variant="standard"
                         error={errors["body"]?.message} {...register("body")}
                         helperText={errors["body"]?.message}/>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </Card>
  );
}

export default Action;
