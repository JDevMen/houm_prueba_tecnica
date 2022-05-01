import "./App.css";
import Cabecera from "./Presentacion/Views/Cabecera";
import Contenido from "./Presentacion/Views/Contenido";
import Footer from "./Presentacion/Views/Footer";

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Contenido />
      <Footer />
    </div>
  );
}

export default App;
