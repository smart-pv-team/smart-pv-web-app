import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import breakpoints from "assets/theme/base/breakpoints";
import backgroundImage from "assets/images/pv_3.jpeg";

function Header({children}) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
          ? setTabsOrientation("vertical")
          : setTabsOrientation("horizontal");
    }

    /**
     The event listener that's calling the handleTabsOrientation function when resizing the window.
     */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
      <MDBox position="relative" mb={5}>
        <MDBox
            display="flex"
            alignItems="center"
            position="relative"
            minHeight="18.75rem"
            borderRadius="xl"
            sx={{
              backgroundImage: ({functions: {rgba, linearGradient}, palette: {gradients}}) =>
                  `${linearGradient(
                      rgba(gradients.info.main, 0.6),
                      rgba(gradients.info.state, 0.6)
                  )}, url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "50%",
              overflow: "hidden",
            }}
        />
        <Card
            sx={{
              position: "relative",
              mt: -8,
              mx: 3,
              py: 2,
              px: 2,
            }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <MDBox height="100%" mt={0.5} m={1} lineHeight={1}>
                <MDTypography variant="h5" fontWeight="medium">
                  SmartPV
                </MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  IoT management based on photovoltaic farm production
                </MDTypography>
              </MDBox>
            </Grid>
          </Grid>
          {children}
        </Card>
      </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
