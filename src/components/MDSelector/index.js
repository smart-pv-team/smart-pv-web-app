import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {Controller} from "react-hook-form";
import React from "react";
import MDBox from "../MDBox";
import MDTypography from "../MDTypography";
import Grid from "@mui/material/Grid";

export default function CustomSelector({
  gridProps, control, errors, id, label, options, icon,
  open,
  onClose,
  onOpen
}) {
  return (
      <MDBox p={1} pl={0} fullWidth alignItems='center' sx={gridProps}>
        <Grid container
              display="flex"
              alignItems="center"
              p={2}
              pb={0}
              spacing={1}
        >
          {icon && <Grid item xs={1} md={1} lg={1}>
            {icon}
          </Grid>}
          <Grid item xs={11} md={11} lg={11}>

            <FormControl fullWidth>
              <InputLabel shrink htmlFor="select-multiple-native">
                {label}
              </InputLabel>
              <Controller
                  control={control}
                  name={id}
                  render={({field: {onChange, value}}) => (
                      <Select
                          label={label}
                          value={value}
                          defaultValue="PUT"
                          open={open}
                          onClose={onClose}
                          onOpen={onOpen}
                          color="primary"
                          sx={{minHeight: 45}}
                          onChange={(e) => {
                            onChange(e.target.value)
                          }}
                      >
                        {options.map((option) => {
                          return (
                              <MenuItem value={option}>{option}</MenuItem>
                          )
                        })}
                      </Select>
                  )}
              />
            </FormControl>
            <MDBox display='flex' fullWidth>
              <MDTypography variant="caption" color="secondary">
                {errors[id]
                    ? errors[id].message
                    : ''}
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
  )

}