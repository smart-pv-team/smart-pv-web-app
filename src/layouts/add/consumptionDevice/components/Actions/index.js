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

import MDBox from "components/MDBox";

import React, {useState} from "react";
import DataTable from "./components/DataTable";
import actionDateToTableFormat from "./components/DataTable/data/actionDateToTableFormat";

function Actions({endpoints, removeAction, removeHttpHeader}) {
  const endpointsWithNames = endpoints?.map((el, index) => {
    return {
      ...el,
      name: index + 1
    }
  })
  const [action, setAction] = useState(1);
  const {columns, rows} = actionDateToTableFormat(endpointsWithNames.filter((e) => e.name === action)[0] || undefined,
      removeHttpHeader);
  const _removeAction = (data) => {
    removeAction(data)
    setAction((action) => 1)
  };

  return (
      <MDBox mb={3}>
        <DataTable
            isSorted={true}
            entriesPerPage={1}
            canSearch={true}
            showTotalEntries={true}
            noEndBorder
            removeHttpHeader={removeHttpHeader}
            removeAction={_removeAction}
            actions={endpointsWithNames}
            action={action}
            setAction={setAction}
            table={{columns, rows}}
        />
      </MDBox>
  );
}

export default Actions;
