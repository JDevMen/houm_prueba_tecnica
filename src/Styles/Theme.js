import { createTheme } from "@mui/material";

//Configuración de tema globales
const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ff452b",
    },
    secondary: {
      main: "#263238",
    },
  },
  typography: {
    fontFamily: "Nunito",
  },
});

export default themeOptions;
