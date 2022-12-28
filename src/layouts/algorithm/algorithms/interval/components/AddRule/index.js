import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import MDButton from "../../../../../../components/MDButton";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import CustomSelector from "../../../../../../components/MDSelector";
import React, {useState} from "react";

function AddRule({addRule, devices, intervals}) {
  const [actions, setActions] = useState(["READ", "TURN_ON", "TURN_OFF"]);
  const schema = yup.object().shape({
    device: yup.string().required(),
    action: yup.string().required(),
    interval: yup.number().required(),
  });

  const {
    handleSubmit,
    control,
    watch,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const watchDevice = watch("device");
  const updateActions = (value) => {
    const device = devices.filter(d => d.name === value.device)[0] || undefined;
    if (device) {
      setActions(device.endpoints.map(e => e.action))
    }
  }

  React.useEffect(() => {
    const subscription = watch((value, {name, type}) => updateActions(value));
    return () => subscription.unsubscribe();
  }, [watchDevice]);
  const onSubmitHandler = (data) => {
    addRule(data)
  };

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
                              id="device" label="Device" options={devices.map(d => d.name)}/>
            </Grid>
            <Grid item xs={12} md={12}>
              <CustomSelector control={control} errors={errors}
                              icon={<Icon sx={{color: 'action.active'}}>keyboard_double_arrow_right_icon</Icon>}
                              id="action" label="Action" options={actions}/>
            </Grid>
            <Grid item xs={12} md={12}>
              <CustomSelector control={control} errors={errors}
                              icon={<Icon sx={{color: 'action.active'}}>density_large_icon</Icon>}
                              id="interval" label="Interval" options={intervals.map(i => i.name)}/>
            </Grid>
          </Grid>
        </MDBox>
      </Card>
  );
}

export default AddRule;
