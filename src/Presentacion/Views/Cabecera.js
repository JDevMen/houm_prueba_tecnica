import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const Cabecera = () => {
  return (
    <div className="cabecera">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Welcome to Marvel Character Wiki
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Cabecera;
