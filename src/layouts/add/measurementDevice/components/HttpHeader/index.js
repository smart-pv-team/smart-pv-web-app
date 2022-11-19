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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import {useMaterialUIController} from "context";

function HttpHeader({header, value, httpHeaders, setHttpHeaders, key}) {
  const [controller] = useMaterialUIController();
  const {darkMode} = controller;

  const handleDelete = () => {
    setHttpHeaders(Object.fromEntries(Object.entries(httpHeaders).filter(([key, _]) => key !== header)))
  }
  return (
      <MDBox
          key={key}
          component="li"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          bgColor={darkMode ? "transparent" : "grey-100"}
          borderRadius="lg"
          p={3}
          mt={2}
      >
        <MDBox width="100%" display="flex" flexDirection="column">
          <MDBox
              display="flex"
              justifyContent="space-between"
              alignItems={{xs: "flex-start", sm: "center"}}
              flexDirection={{xs: "column", sm: "row"}}
          >
            <MDTypography variant="button" fontWeight="medium">
              {header}
            </MDTypography>
            <MDTypography variant="button" fontWeight="medium">
              {value}
            </MDTypography>
            <MDBox display="flex" alignItems="center" mt={{xs: 2, sm: 0}} ml={{xs: -1.5, sm: 0}}>
              <MDBox mr={1}>
                <MDButton variant="text" color="error" onClick={handleDelete}>
                  <Icon>delete</Icon>&nbsp;delete
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
  );
}

// Setting default values for the props of Bill

// Typechecking props for the Bill
HttpHeader.propTypes = {
  header: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default HttpHeader;
