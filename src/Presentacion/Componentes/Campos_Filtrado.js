import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { TextField, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const CamposFiltrado = () => {
  const [value, setValue] = useState(null);
  const [ordenamiento, setOrdenamiento] = useState("");

  const [direccionOrdenamiento, setDireccionOrdenamiento] = useState("");

  const handleChangeOrdenamiento = (event) => {
    setOrdenamiento(event.target.value);
  };

  const handleDireccionOrdenamiento = (event, nuevaDireccion) => {
    setDireccionOrdenamiento(nuevaDireccion);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          label="Starts with"
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Modified since"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField size="small" {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="ordenamiento-select-label">Order by</InputLabel>
          <Select
            labelId="ordenamiento-select-label"
            id="ordenamiento-select"
            value={ordenamiento}
            label="Order by"
            size="small"
            onChange={handleChangeOrdenamiento}
          >
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"modified"}>Modified since</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <ToggleButtonGroup
          value={direccionOrdenamiento}
          exclusive
          onChange={handleDireccionOrdenamiento}
          aria-label="text alignment"
        >
          <ToggleButton value="ascendente" aria-label="ascendente">
            <ArrowUpwardIcon />
          </ToggleButton>
          <ToggleButton value="descendente" aria-label="descendente">
            <ArrowDownwardIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Filter</Button>
      </Grid>
    </Grid>
  );
};

export default CamposFiltrado;
