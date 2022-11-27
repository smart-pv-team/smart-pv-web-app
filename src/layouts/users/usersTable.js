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

// Images
import Icon from "@mui/material/Icon";
import MDButton from "../../components/MDButton";

export default function UsersTable(users, deleteUser) {
  const User = ({name}) => (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <Icon fontSize="small">person</Icon>
        <MDBox ml={2} lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {name}
          </MDTypography>
        </MDBox>
      </MDBox>
  );
  return {
    columns: [
      {Header: "name", accessor: "name", width: "35%", align: "left"},
      {Header: "email", accessor: "email", align: "center"},
      {Header: "token", accessor: "token", align: "center"},
      {Header: "delete", accessor: "delete", align: "center"},
    ],

    rows: users.map((user) => {
      return (
          {
            name: (<User name={user.name}/>),
            email: (
                <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
                  {user.email}
                </MDTypography>
            ),
            token: (
                <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
                  {user.token}
                </MDTypography>
            ),
            delete: (
                <MDBox ml={-1}>
                  <MDButton variant="text" color="error" onClick={() => deleteUser(user.token)}>
                    <Icon>delete</Icon>
                  </MDButton>
                </MDBox>
            ),
          })
    }),
  };
}
