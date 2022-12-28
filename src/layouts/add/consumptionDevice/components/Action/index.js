import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MDInput from "../../../../../components/MDInput";
import React from "react";
import CustomSelector from "../../../../../components/MDSelector";
import MDButton from "../../../../../components/MDButton";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

function AddAction({addAction, responseOptions}) {
  const schema = yup.object().shape({
    action: yup.string().required(),
    description: yup.string(),
    endpoint: yup.string().required(),
    httpHeaders: yup.array(),
    httpMethod: yup.string().oneOf(["PATCH", "PUT", "GET", "POST"]).required(),
    responseClass: yup.string().required(),
    body: yup.string()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addActionHandler = (data) => {
    console.log(data)
    addAction(data)
  }

  return (
      <Card sx={{height: "100%"}}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2} pl={3}>
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Add action
          </MDTypography>
          <MDBox display="flex" alignItems="flex-start">
            <MDButton variant="gradient" color="dark" onClick={handleSubmit(addActionHandler)}>
              <Icon sx={{fontWeight: "bold"}}>add</Icon>
              &nbsp;Add new action
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox p={1}>
          <Grid container spacing={3}>
            <Grid item xs={24} md={24}>
              <MDBox
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={2}
              >
                <Icon sx={{color: 'action.active', mr: 1, my: 0.5}}>
                  keyboard_double_arrow_right_icon
                </Icon>
                <MDInput id="action" label="Action" fullWidth variant="standard"
                         error={errors["action"]?.message} {...register("action")}
                         helperText={errors["action"]?.message}/>
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
                  link
                </Icon>
                <MDInput id="endpoint" label="Endpoint" fullWidth variant="standard"
                         error={errors["endpoint"]?.message} {...register("endpoint")}
                         helperText={errors["endpoint"]?.message}/>
              </MDBox>
            </Grid>
            <Grid item xs={24} md={24}>
              <CustomSelector control={control} errors={errors}
                              icon={<Icon sx={{color: 'action.active', my: 0.5}}>http</Icon>}
                              id="httpMethod" label="Select Http Method" options={["PATCH", "PUT", "GET", "POST"]}/>
            </Grid>
            <Grid item xs={24} md={24}>
              <CustomSelector control={control} errors={errors}
                              icon={<Icon sx={{color: 'action.active', my: 0.5}}>http</Icon>}
                              id="responseClass" label="Select Response Class"
                              options={responseOptions || "NO_RESPONSE"}/>
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
                <MDInput id="body" label="Body" fullWidth multiline rows={5} variant="standard"
                         error={errors["body"]?.message} {...register("body")}
                         helperText={errors["body"]?.message}/>
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
                  assignment
                </Icon>
                <MDInput id="description" label="Description" fullWidth variant="standard"
                         error={errors["description"]?.message} {...register("description")}
                         helperText={errors["description"]?.message}/>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </Card>
  );
}

export default AddAction;
