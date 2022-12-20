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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
// Billing page components
import React from "react";
import DataTable from "./components/DataTable";
import actionDateToTableFormat from "./components/DataTable/data/actionDateToTableFormat";

function Actions({removeAction, endpoints, removeHttpHeader}) {

  endpoints = [
    {
      id: 3,
      action: "READ",
      endpoint: "/read",
      httpMethod: "PATCH",
      responseClass: "SUPLA_ROW01",
      description: "",
      headers: [
        {
          header: "Accept",
          value: "json",
          action: "READ",
        },
        {
          header: "Authorization",
          value: "Bearer Mzg5ZWNhY2I5ZjZmNTkzNjAxNDgyN2U2NWI2NzYyMmJjOGFmNTYxYWFmMDBlOWM4YjFmOTMxOTU0MjliNWVmMw.aHR0cHM6Ly9zdnI0OC5zdXBsYS5vcmc=",
          action: "READ",
        }]
    },
    {
      id: 2,
      action: "TURN_ON",
      endpoint: "/turn_on",
      httpMethod: "PATCH",
      responseClass: "SUPLA_ROW01_ON_OFF",
      description: "",
      headers: [
        {
          header: "Accept",
          value: "json",
          action: "READ",
        },
        {
          header: "Authorization",
          value: "Bearer Mzg5ZWNhY2I5ZjZmNTkzNjAxNDgyN2U2NWI2NzYyMmJjOGFmNTYxYWFmMDBlOWM4YjFmOTMxOTU0MjliNWVmMw.aHR0cHM6Ly9zdnI0OC5zdXBsYS5vcmc=",
          action: "READ",
        }]
    },
    {
      id: 1,
      action: "TURN_OFF",
      endpoint: "/turn_off",
      httpMethod: "PATCH",
      responseClass: "SUPLA_ROW01_ON_OFF",
      description: "",
      headers: [
        {
          header: "Accept",
          value: "json",
          action: "READ",
        },
        {
          header: "Authorization",
          value: "Bearer Mzg5ZWNhY2I5ZjZmNTkzNjAxNDgyN2U2NWI2NzYyMmJjOGFmNTYxYWFmMDBlOWM4YjFmOTMxOTU0MjliNWVmMw.aHR0cHM6Ly9zdnI0OC5zdXBsYS5vcmc=",
          action: "READ",
        }]
    }
  ]
  //TODO components connection, backend connection

  const {columns, rows} = actionDateToTableFormat(endpoints.filter((e) => e.action === "READ")[0].headers, () => {
  });
  return (
      <MDBox mb={3}>
        <DataTable
            isSorted={true}
            entriesPerPage={1}
            canSearch={true}
            showTotalEntries={true}
            noEndBorder
            removeHttpHeader={removeHttpHeader}
            removeAction={removeAction}
            actions={endpoints}
            table={{columns, rows}}
        />
      </MDBox>
  );
}

export default Actions;
