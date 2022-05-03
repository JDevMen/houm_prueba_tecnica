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

const CamposFiltrado = (props) => {
  const [empiezaCon, setEmpiezaCon] = useState("");
  const [modificacionDesde, setModificacionDesde] = useState(null);
  const [ordenarPor, setOrdenarPor] = useState("");
  const [direccionOrdenamiento, setDireccionOrdenamiento] = useState("");

  const handleChangeEmpiezaCon = (event) => {
    setEmpiezaCon(event.target.value);
  };

  const handleChangeModificacionDesde = (event) => {
    const fechaElegida = new Date(event);

    setModificacionDesde(fechaElegida);
  };

  const handleChangeOrdenamiento = (event) => {
    setOrdenarPor(event.target.value);
  };

  const handleDireccionOrdenamiento = (event, nuevaDireccion) => {
    setDireccionOrdenamiento(nuevaDireccion);
  };

  const onClickFiltrar = () => {
    props.filtrarPorParametros({
      empiezaCon: empiezaCon,
      modificacionDesde: modificacionDesde,
      ordenarPor: ordenarPor,
      direccionOrdenamiento: direccionOrdenamiento,
    });
  };

  const onClickResetFiltrar = () => {
    setEmpiezaCon("");
    setModificacionDesde(null);
    setOrdenarPor("");
    setDireccionOrdenamiento("");
    props.resetFiltros();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <TextField
          id="outlined-basic"
          label="Starts with"
          variant="outlined"
          size="small"
          value={empiezaCon}
          onChange={(e) => handleChangeEmpiezaCon(e)}
        />
      </Grid>
      <Grid item xs={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disableFuture
            label="Modified since"
            value={modificacionDesde}
            inputFormat="dd/MM/yyyy"
            onChange={(e) => {
              handleChangeModificacionDesde(e);
            }}
            renderInput={(params) => <TextField size="small" {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id="ordenamiento-select-label">Order by</InputLabel>
          <Select
            labelId="ordenamiento-select-label"
            id="ordenamiento-select"
            value={ordenarPor}
            label="Order by"
            size="small"
            onChange={handleChangeOrdenamiento}
          >
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"modified"}>Modified since</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <ToggleButtonGroup
          value={direccionOrdenamiento}
          exclusive
          onChange={handleDireccionOrdenamiento}
          aria-label="text alignment"
        >
          <ToggleButton value="" aria-label="ascendente">
            <ArrowUpwardIcon />
          </ToggleButton>
          <ToggleButton value="-" aria-label="descendente">
            <ArrowDownwardIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" onClick={onClickFiltrar}>
          Filter
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" onClick={onClickResetFiltrar}>
          Reset filter
        </Button>
      </Grid>
    </Grid>
  );
};

export default CamposFiltrado;
