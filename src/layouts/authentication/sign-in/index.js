import {Link, useNavigate} from "react-router-dom";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/pv_2.jpeg";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

function Basic({singIn, singInError}) {

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required(),
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
    singIn(data.email, data.password, navigate);
    reset();
  };

  return (
      <BasicLayout image={bgImage}>
        <Card>
          <MDBox
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
              mx={2}
              mt={-3}
              p={2}
              mb={1}
              textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Sign in
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput type="email" label="Email" fullWidth {...register("email")} required/>
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                    {...register("password")}
                    type="password"
                    label="Password"
                    required
                    fullWidth
                />
              </MDBox>
              <MDBox justifyContent='center'>
                <MDTypography
                    component="a"
                    variant="button"
                    fontWeight="bold"
                    color="error"
                    textGradient
                >
                  {singInError || errors["email"]?.message || errors["password"]?.message}
                </MDTypography>
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton
                    variant="gradient"
                    color="info"
                    fullWidth
                    onClick={handleSubmit(onSubmitHandler)}
                >
                  sign in
                </MDButton>
              </MDBox>
              <MDBox mt={3} mb={1} textAlign="center">
                <MDTypography variant="button" color="text">
                  Don&apos;t have an account?{" "}
                  <MDTypography
                      component={Link}
                      to="/authentication/sign-up"
                      variant="button"
                      color="info"
                      fontWeight="medium"
                      textGradient
                  >
                    Sign up
                  </MDTypography>
                </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </BasicLayout>
  );
}

export default Basic;
