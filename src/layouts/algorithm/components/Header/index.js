import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import breakpoints from "assets/theme/base/breakpoints";
import backgroundImage from "assets/images/pv_3.jpeg";

function Header({children, algorithms, algorithm, setAlgorithm}) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");

  const parseNameToReadable = (name) => {
    return name.replaceAll("_", " ")
  }

  const parseNameToEnum = (name) => {
    return name.replaceAll(" ", "_")
  }

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

  const handleSetTabValue = (event, newValue) => {
    setAlgorithm(newValue)
  };

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
              mt: -8,
              mx: 3,
              py: 2,
              px: 2,
            }}
        >
          <Grid container spacing={3} alignItems="center" sx={{justifyContent: 'space-between'}}>

            <Grid item>
              <MDBox height="100%" mt={0.5} lineHeight={1}>
                <MDTypography variant="h5" fontWeight="medium">
                  Algorithms
                </MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  Setup and select your farm management algorithm
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <AppBar position="static">
                <Tabs orientation={tabsOrientation} value={algorithm} onChange={handleSetTabValue}>
                  {algorithms.map((algorithm) => {
                    return (
                        <Tab
                            label={parseNameToReadable(algorithm.name)}
                            value={algorithm.name}
                        />
                    );
                  })}
                </Tabs>
              </AppBar>
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
