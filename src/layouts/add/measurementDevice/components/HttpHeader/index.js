import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import {useMaterialUIController} from "context";

function HttpHeader({header, value, remove, key}) {
  const [controller] = useMaterialUIController();
  const {darkMode} = controller;
  const handleDelete = () => {
    remove()
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
            <MDTypography pr={2} variant="button" fontWeight="medium">
              {header}
            </MDTypography>
            <MDTypography sx={{wordBreak: "break-word"}} variant="button" fontWeight="medium">
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
