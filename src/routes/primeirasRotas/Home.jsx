import { Outlet } from "react-router-dom";
import CaixaDeBuscaHome from "../../components/layout/CaixaDeBuscaHome";
import BarraDeNavegacaoHome from "../../components/layout/BarraDeNavegacaoHome";

import "./Home.css"

const Home = () => {
  return (
    <div className="container-principal">
      <section id="container-de-navegacao">
        <CaixaDeBuscaHome />
        <BarraDeNavegacaoHome />
      </section>
      <Outlet />
    </div>
  );
};

export default Home;
