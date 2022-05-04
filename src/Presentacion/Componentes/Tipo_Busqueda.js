import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

const SearchType = (props) => {
  return (
    <Box>
      <RadioGroup
        row
        name="row-radio-buttons-group"
        value={props.filterType}
        onChange={(e) => props.changeSearchHandler(e.target.value)}
      >
        <FormControlLabel value="filter" control={<Radio />} label="Filter" />
        <FormControlLabel value="exact" control={<Radio />} label="Exact" />
      </RadioGroup>
    </Box>
  );
};

export default SearchType;
