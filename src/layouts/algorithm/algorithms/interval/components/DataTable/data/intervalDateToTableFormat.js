/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import Icon from "@mui/material/Icon";
import MDButton from "../../../../../../../components/MDButton";

export default function intervalDateToTableFormat(intervalData, deleteRule) {
  const Device = ({name, deviceModel}) => (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <Icon fontSize="small">microwave_icon</Icon>
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
      {Header: "action", accessor: "action", align: "left"},
      {Header: "interval", accessor: "interval", align: "center"},
      {Header: "delete", accessor: "delete", align: "center"},
    ],

    rows: intervalData.map((rule) => {
      return (
          {
            device: (<Device name={rule.deviceName} deviceModel={rule.deviceModel}/>),
            action: (
                <MDBox ml={-1}>
                  <MDBadge badgeContent={rule.action} color="success" variant="gradient" size="lg"/>
                </MDBox>
            ),
            interval: (
                <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
                  {rule.intervalName}
                </MDTypography>
            ),
            delete: (
                <MDBox ml={-1}>
                  <MDButton variant="text" color="error" onClick={() => deleteRule(rule.id)}>
                    <Icon>delete</Icon>
                  </MDButton>
                </MDBox>
            ),
          })
    }),
  };
}
