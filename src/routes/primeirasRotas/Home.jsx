import { Outlet } from "react-router-dom";
import CaixaDeBuscaHome from "../../components/BarrasDeNavegacao/CaixaDeBuscaHome";
import BarraDeNavegacaoHome from "../../components/BarrasDeNavegacao/BarraDeNavegacaoHome";

import './Home.css'

const Home = () => {
return (
    <>
      <section id="container-de-navegacao">
        <CaixaDeBuscaHome />
        <BarraDeNavegacaoHome />
      </section>
      <Outlet />
    </>
  );
};

export default Home;
