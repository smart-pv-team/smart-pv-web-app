/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import Icon from "@mui/material/Icon";
import {Link} from "react-router-dom";
import MDButton from "../../components/MDButton";
import Grid from "@mui/material/Grid";

export default function ConsumptionDevicesTable(devices, deleteConsumingDevice) {
  const Device = ({name, deviceModel}) => (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <Icon fontSize="small">bolt</Icon>
        <MDBox ml={2} lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {name}
          </MDTypography>
          <MDTypography variant="caption">{deviceModel}</MDTypography>
        </MDBox>
      </MDBox>
  );
  return {
    columns: [
      {Header: "device", accessor: "device", width: "35%", align: "left"},
      {Header: "working hours", accessor: "workingHours", align: "left"},
      {Header: "actions", accessor: "actions", align: "center"},
      {Header: "added", accessor: "added", align: "center"},
      {Header: "status", accessor: "status", align: "center"},
      {Header: "ip address", accessor: "ipAddress", align: "center"},
      {Header: "action", accessor: "action", align: "center"},
      {Header: "delete", accessor: "delete", align: "center"},
    ],

    rows: devices.map((device) => {
      return (
          {
            device: (<Device name={device.name} deviceModel={device.deviceModel}/>),
            status: (
                <MDBox ml={1}>
                  <MDBadge badgeContent="online" color="success" variant="gradient" size="sm"/>
                </MDBox>
            ),
            workingHours: (
                <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
                  {device.workingHours} h
                </MDTypography>
            ),
            actions: (
                <Grid container ml={-1}>
                  {device.endpoints
                  .map((endpoint) => endpoint.action)
                  .map((action) =>
                      <Grid item lg={4} md={6} sm={12}>
                        <MDBadge badgeContent={action} color="info" variant="gradient" size="sm"/>
                      </Grid>)
                  }
                </Grid>
            ),
            added: (
                <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
                  {new Date(device.creationDate).toDateString()}
                </MDTypography>
            ),
            ipAddress: (
                <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                  {device.ipAddress}
                </MDTypography>
            ),
            action: (
                <MDTypography component={Link}
                              to={"/add-consumption-device/:id".replace(':id', device.id)}
                              variant="caption" color="text" fontWeight="medium">
                  Edit
                </MDTypography>
            ),
            delete: (
                <MDBox ml={-1}>
                  <MDButton variant="text" color="error" onClick={() => deleteConsumingDevice(device.id)}>
                    <Icon>delete</Icon>
                  </MDButton>
                </MDBox>
            ),
          })
    }),
  };
}
