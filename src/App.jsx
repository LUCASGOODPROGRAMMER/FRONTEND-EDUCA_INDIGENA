import { Outlet } from "react-router-dom";
import "./App.css";
import './css/stylesGlobal.css'
import NavBar from "./components/BarrasDeNavegacao/NavBar";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
