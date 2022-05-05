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

const FilteringFields = (props) => {
  const [startsWith, setStartsWith] = useState("");
  const [modifiedSince, setmodifiedSince] = useState(null);
  const [orderBy, setOrderBy] = useState("");
  const [orderDirection, setOrderDirection] = useState("");

  const handleChangeStartsWith = (event) => {
    setStartsWith(event.target.value);
  };

  const handleChangeModifiedSince = (event) => {
    const chosenDate = new Date(event);

    setmodifiedSince(chosenDate);
  };

  const handleChangeOrder = (event) => {
    setOrderBy(event.target.value);
  };

  const handleOrderDirection = (event, newDirection) => {
    setOrderDirection(newDirection);
  };

  const onClickFiltrar = () => {
    props.filterByParametersHandler({
      startsWith: startsWith,
      modifiedSince: modifiedSince,
      orderBy: orderBy,
      orderDirection: orderDirection,
    });
  };

  const onClickResetFilter = () => {
    setStartsWith("");
    setmodifiedSince(null);
    setOrderBy("");
    setOrderDirection("");
    props.resetFiltersHandler();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id="outlined-basic"
          label="Starts with"
          variant="outlined"
          size="small"
          value={startsWith}
          onChange={(e) => handleChangeStartsWith(e)}
          style={{ minWidth: "100%" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disableFuture
            label="Modified since"
            value={modifiedSince}
            inputFormat="dd/MM/yyyy"
            onChange={(e) => {
              handleChangeModifiedSince(e);
            }}
            renderInput={(params) => (
              <TextField
                size="small"
                style={{ minWidth: "100%" }}
                {...params}
              />
            )}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <FormControl fullWidth size="small">
          <InputLabel id="order-select-label">Order by</InputLabel>
          <Select
            labelId="order-select-label"
            id="order-select"
            value={orderBy}
            label="Order by"
            size="small"
            onChange={handleChangeOrder}
          >
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"modified"}>Modified since</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ToggleButtonGroup
          value={orderDirection}
          exclusive
          size="small"
          onChange={handleOrderDirection}
          aria-label="text alignment"
          color="primary"
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
        <Button variant="outlined" onClick={onClickFiltrar}>
          Filter
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" onClick={onClickResetFilter}>
          Reset filter
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilteringFields;
