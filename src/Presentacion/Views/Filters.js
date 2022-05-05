import { FormControl, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ExactSearch from "../Componentes/Exact_search";
import FilteringFields from "../Componentes/Filter_fields";
import SearchType from "../Componentes/Search_type";

const Filters = (props) => {
  const tipoBusquedaHandler = (e) => {
    props.changeSearchHandler(e);
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <SearchType
            filterType={props.filterType}
            changeSearchHandler={tipoBusquedaHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            {props.filterType === "exact" && (
              <ExactSearch
                searchExactNameHandler={props.searchExactNameHandler}
                resetFiltersHandler={props.resetFiltersHandler}
              />
            )}
            {props.filterType === "filter" && (
              <FilteringFields
                filterByParametersHandler={props.filterByParametersHandler}
                resetFiltersHandler={props.resetFiltersHandler}
              />
            )}
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filters;
