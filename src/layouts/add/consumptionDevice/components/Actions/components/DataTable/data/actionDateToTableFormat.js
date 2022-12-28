/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import MDButton from "../../../../../../../../components/MDButton";

export default function actionDateToTableFormat(action, removeHttpHeader) {
  const Device = ({name}) => (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <Icon fontSize="small">http_icon</Icon>
        <MDBox ml={2} lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {name}
          </MDTypography>
        </MDBox>
      </MDBox>
  );

  action = action || {httpHeaders: {}}
  return {
    columns: [
      {Header: "header", accessor: "header", width: "25%", align: "left"},
      {Header: "value", accessor: "value", align: "left"},
      {Header: "delete", accessor: "delete", align: "center"},
    ],

    rows: Object.entries(action.httpHeaders).map((header, value) => {
      return (
          {
            header: (<Device name={header[0]}/>),
            value: (
                <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
                  {header[1]}
                </MDTypography>
            ),
            delete: (
                <MDBox ml={-1}>
                  <MDButton variant="text" color="error"
                            onClick={() => removeHttpHeader({[header[0]]: header[1]}, action.action)}>
                    <Icon>delete</Icon>
                  </MDButton>
                </MDBox>
            ),
          })
    }),
  };
}
