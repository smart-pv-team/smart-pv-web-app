/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Images
import Icon from "@mui/material/Icon";

export default function MeasurementDevicesTable(devices) {
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
      {Header: "measured energy", accessor: "energy", align: "left"},
      {Header: "status", accessor: "status", align: "center"},
      {Header: "added", accessor: "added", align: "center"},
      {Header: "ip address", accessor: "ipAddress", align: "center"},
      {Header: "action", accessor: "action", align: "center"},
    ],

    rows: devices.map((device) => {
      return (
          {
            device: (<Device name={device.name} deviceModel={device.deviceModel}/>),
            energy: (
                <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
                  {Math.trunc(device.measuredEnergy / 1000)} kW
                </MDTypography>
            ),
            status: (
                <MDBox ml={-1}>
                  <MDBadge badgeContent="online" color="success" variant="gradient" size="sm"/>
                </MDBox>
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
                <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                  Edit
                </MDTypography>
            ),
          })
    }),
  };
}
