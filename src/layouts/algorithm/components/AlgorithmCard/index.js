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

// react-router-dom components
import {Link} from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function AlgorithmCard({title, description, action}) {

  return (
      <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "visible",
          }}
      >
        <MDBox mt={1} mx={0.5}>
          <MDBox mb={1}>
            {action.type === "internal" ? (
                <MDTypography
                    component={Link}
                    to={action.route}
                    variant="h5"
                    textTransform="capitalize"
                >
                  {title}
                </MDTypography>
            ) : (
                <MDTypography
                    component="a"
                    href={action.route}
                    target="_blank"
                    rel="noreferrer"
                    variant="h5"
                    textTransform="capitalize"
                >
                  {title}
                </MDTypography>
            )}
          </MDBox>
          <MDBox mb={3} lineHeight={0}>
            <MDTypography variant="button" fontWeight="light" color="text">
              {description}
            </MDTypography>
          </MDBox>
          <MDBox display="flex" justifyContent="space-between" alignItems="center">
            {action.type === "internal" ? (
                <MDButton
                    component={Link}
                    to={action.route}
                    variant="outlined"
                    size="small"
                    color={action.color}
                >
                  {action.label}
                </MDButton>
            ) : (
                <MDButton
                    component="a"
                    href={action.route}
                    target="_blank"
                    rel="noreferrer"
                    variant="outlined"
                    size="small"
                    color={action.color}
                >
                  {action.label}
                </MDButton>
            )}
          </MDBox>
        </MDBox>
      </Card>
  );
}

AlgorithmCard.defaultProps = {
  authors: [],
};

AlgorithmCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
};

export default AlgorithmCard;
