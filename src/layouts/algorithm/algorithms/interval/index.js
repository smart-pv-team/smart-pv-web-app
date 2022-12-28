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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import React, {useState} from "react";
import AddInterval from "./components/AddInterval";
import DataTable from "./components/DataTable/";
import intervalDateToTableFormat from "./components/DataTable/data/intervalDateToTableFormat";
import AddRule from "./components/AddRule";

function IntervalAlgorithm({devices, intervals, rules, deleteRule, deleteInterval, addRule, addInterval}) {
  const [interval, setInterval] = useState(intervals[0]?.name || undefined);

  const {columns, rows} = intervalDateToTableFormat(rules ? rules.filter((r) => r.intervalName === interval) : [],
      deleteRule);
  return (
      <DashboardLayout>
        <DashboardNavbar absolute isMini/>
        <MDBox mt={8}>
          <MDBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <DataTable
                    isSorted={true}
                    deleteInterval={deleteInterval}
                    entriesPerPage={1}
                    canSearch={true}
                    showTotalEntries={true}
                    noEndBorder
                    setInterval={setInterval}
                    intervals={intervals}
                    table={{columns, rows}}
                    interval={interval}
                />
              </Grid>
              <Grid container item xs={12} md={5}>
                <MDBox>
                  <AddInterval addInterval={addInterval}/>
                  <AddRule addRule={addRule} devices={devices} intervals={intervals}/>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
        <Footer/>
      </DashboardLayout>
  );
}

export default IntervalAlgorithm;
