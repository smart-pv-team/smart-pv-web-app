import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import MDButton from "../../../../../../components/MDButton";
import MDInput from "../../../../../../components/MDInput";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";

function AddInterval({addInterval}) {

  const schema = yup.object().shape({
    lowerBound: yup.number().required(),
    upperBound: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    addInterval(data)
    reset();
  };

  return (
      <Card sx={{mb: 3, p: 2}}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2} pl={3}>
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Interval
          </MDTypography>
          <MDBox display="flex" alignItems="flex-start">

            <MDButton variant="gradient" color="dark" onClick={handleSubmit(onSubmitHandler)}>
              <Icon sx={{fontWeight: "bold"}}>add</Icon>
              &nbsp;Add new interval
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MDBox
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={2}
              >
                <MDInput
                    id="lowerBound" label="Lower Bound" fullWidth variant="standard"
                    error={errors["lowerBound"]?.message} {...register("lowerBound")}
                    helperText={errors["lowerBound"]?.message}
                />
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
                <MDInput
                    id="upperBound" label="Upper Bound" fullWidth variant="standard"
                    error={errors["upperBound"]?.message} {...register("upperBound")}
                    helperText={errors["upperBound"]?.message}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </Card>
  );
}

export default AddInterval;
