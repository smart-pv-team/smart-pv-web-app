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
import * as yup from "yup";
import {useFieldArray, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import AddInterval from "./components/AddInterval";
import DataTable from "./components/DataTable/";
import intervalDateToTableFormat from "./components/DataTable/data/intervalDateToTableFormat";
import AddRule from "./components/AddRule";

function IntervalAlgorithm({addNewDevice, farmsIds, deviceModels, devices, responseOptions}) {
  const schema = yup.object().shape({
    id: yup.string(),
    name: yup.string().required(),
    farmId: yup.string().required(),
    ipAddress: yup.string().required(),
    deviceModel: yup.string().required(),
    headers: yup.array().of(
        yup.object().shape({
          header: yup.string(),
          value: yup.string()
        })
    ),
    endpoint: yup.string().required(),
    httpMethod: yup.string().oneOf(["PATCH", "PUT", "GET", "POST"]).required(),
    description: yup.string(),
    responseClass: yup.string().required()
  });
  const {id} = useParams();

  const [open, setOpen] = useState(false);
  const [interval, setInterval] = useState(1);
  const addToInterval = (x) => setInterval(interval + x)
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const device = id ? devices.filter((ob) => ob.id === id)[0] : undefined
  const defaultValues = device ? {
    id: id,
    name: device.name,
    farmId: device.farmId,
    ipAddress: device.ipAddress,
    deviceModel: device.deviceModel,
    headers: Object.entries(device.endpoints.filter((e) => e.action === "READ").map((e) => e.httpHeaders)[0]).map(
        (e) => ({header: e[0], value: e[1][0]})),
    endpoint: device.endpoints.filter((e) => e.action === "READ")[0].endpoint,
    httpMethod: device.endpoints.filter((e) => e.action === "READ")[0].httpMethod,
    responseClass: device.endpoints.filter((e) => e.action === "READ")[0].responseClass,
  } : {}

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });
  const {fields, append, remove} = useFieldArray({name: 'headers', control});
  const onSubmitHandler = (data) => {
    console.log(data)
    addNewDevice(data);
  };
  //TODO interval data
  const intervalData = [
    {
      deviceName: "STREFA LABO - ROLKOWNIA",
      deviceModel: "SUPLA_ROW01",
      action: "TURN_ON",
      interval: 1,
      id: 3
    },
    {
      deviceName: "HALA C [C9/C10]",
      deviceModel: "SUPLA_ROW01",
      action: "SET_TEMPERATURE_20",
      interval: 1,
      id: 3
    },
    {
      deviceName: "HALA B [BRAMA WYJAZDOWA]",
      deviceModel: "SUPLA_ROW01",
      action: "SET_TEMPERATURE_20",
      interval: 1,
      id: 3
    }, {
      deviceName: "HALA A [BRAMA]",
      deviceModel: "SUPLA_ROW01",
      action: "TURN_ON",
      interval: 1,
      id: 3
    },
    {
      deviceName: "HALA C [C1/C2]",
      deviceModel: "SUPLA_ROW01",
      action: "SET_POWER_5",
      interval: 1,
      id: 3
    },
    {
      deviceName: 1,
      deviceModel: "SUPLA_ROW01",
      action: "TURN_ON",
      interval: 3,
      id: 3
    },
    {
      deviceName: 1,
      deviceModel: "SUPLA_ROW01",
      action: "TURN_ON",
      interval: 2,
      id: 3
    },
    {
      deviceName: 1,
      deviceModel: "SUPLA_ROW01",
      action: "TURN_ON",
      interval: 2,
      id: 3
    },
    {
      deviceName: "HALA A [RAMPA]",
      deviceModel: "SUPLA_ROW01",
      action: "TURN_ON",
      interval: 1,
      id: 3
    },
    {
      deviceName: 1,
      deviceModel: "SUPLA_ROW01",
      action: "TURN_ON",
      interval: "HALA C [C5/C6]",
      id: 3
    },

  ]
  const intervals = [
    {
      lower: 0,
      upper: 5,
      id: 1
    },
    {
      lower: 5,
      upper: 10,
      id: 2
    },
    {
      lower: 10,
      upper: 15,
      id: 3
    }
  ]
  //TODO components connection, backend connection
  const addInterval = () => {
  }
  const addRule = () => {
  }
  const {columns, rows} = intervalDateToTableFormat(intervalData.filter((el) => el.interval === interval), () => {
  });
  return (
      <DashboardLayout>
        <DashboardNavbar absolute isMini/>
        <MDBox mt={8}>
          <MDBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <DataTable
                    isSorted={true}
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
                  <AddRule addRule={addRule}/>
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
