import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const Cabecera = () => {
  return (
    <div className="cabecera">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ alignItems: "center" }}>
          <Toolbar>
            <Typography variant="h5" component="div">
              Welcome to
            </Typography>
            <img
              src={process.env.PUBLIC_URL + "\\Imagenes\\marvel_logo.png"}
              alt="Marvel logo"
              height="40rem"
            />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              character Wiki
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Cabecera;
