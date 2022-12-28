import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
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
