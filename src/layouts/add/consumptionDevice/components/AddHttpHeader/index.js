import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "../../../../../components/MDButton";
import Grid from "@mui/material/Grid";
import MDInput from "../../../../../components/MDInput";
import React from "react";
import CustomSelector from "../../../../../components/MDSelector";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";

function AddHttpHeader({addHeader, actions}) {

  const schema = yup.object().shape({
    header: yup.string().required(),
    value: yup.string().required(),
    action: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddNewHeader = (data) => {
    addHeader(data)
  }

  return (
      <MDBox>
        <Card>
          <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2} pl={3}>
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              Add Http Header
            </MDTypography>
            <MDBox display="flex" alignItems="flex-start">
              <MDButton variant="gradient" color="dark" onClick={handleSubmit(handleAddNewHeader)}>
                <Icon sx={{fontWeight: "bold"}}>add</Icon>
                &nbsp;add new http header
              </MDButton>
            </MDBox>
          </MDBox>
          <MDBox p={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <CustomSelector control={control} errors={errors}
                                icon={<Icon sx={{color: 'action.active'}}>keyboard_double_arrow_right_icon</Icon>}
                                id="action" label="Action" options={actions}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <MDBox
                    borderRadius="lg"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p={2}
                >
                  <MDInput id="header" label="Header" fullWidth variant="standard"
                           error={errors["header"]?.message} {...register("header")}
                           helperText={errors["header"]?.message}/>
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MDBox
                    borderRadius="lg"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p={2}
                >
                  <MDInput id="value" label="Value" fullWidth variant="standard"
                           error={errors["value"]?.message} {...register("value")}
                           helperText={errors["value"]?.message}/>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </Card>
      </MDBox>
  );
}

export default AddHttpHeader;