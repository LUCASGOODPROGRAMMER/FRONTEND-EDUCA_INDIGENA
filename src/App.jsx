import { Outlet } from "react-router-dom";
import "./App.css";
import "./css/stylesGlobal.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}



export default App;
