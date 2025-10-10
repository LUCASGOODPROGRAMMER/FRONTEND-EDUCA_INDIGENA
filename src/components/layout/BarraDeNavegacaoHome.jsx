import { NavLink } from "react-router-dom";

import "./BarraDeNavegacaoHome.css";

const BarraDeNavegacaoHome = () => {
  return (
    <nav className="container-de-navegacao sub-nav">
      <NavLink
        to="galeria-de-animais"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        galeria de animais
      </NavLink>

      <NavLink
        to="materiais-de-estudo"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        materiais de estudo
      </NavLink>

      <NavLink
        to="quizzes"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        quizzes
      </NavLink>
    </nav>
  );
};

export default BarraDeNavegacaoHome;
