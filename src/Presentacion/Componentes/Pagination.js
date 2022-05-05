import { Pagination } from "@mui/material";
import React from "react";

const PaginationComponent = (props) => {
  const handleChangePage = (event, newPage) => {
    props.changePageHandler(newPage);
  };

  return (
    <Pagination
      showFirstButton
      showLastButton
      page={props.currentPage}
      size="large"
      count={Math.floor(props.totalResults / props.resultsPerPage)}
      onChange={handleChangePage}
      style={{ padding: "0.5rem" }}
      shape="rounded"
      color="primary"
    />
  );
};

export default PaginationComponent;
