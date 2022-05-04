import "./App.css";
import Cabecera from "./Presentacion/Views/Cabecera";
import Contenido from "./Presentacion/Views/Contenido";
import Footer from "./Presentacion/Views/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeOptions}>
        <Cabecera />
        <Contenido />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
