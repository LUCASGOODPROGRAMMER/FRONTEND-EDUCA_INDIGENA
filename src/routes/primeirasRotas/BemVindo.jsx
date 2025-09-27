import React from "react";
import { NavLink } from "react-router-dom";

import './BemVindo.css'

const BemVindo = () => {
  return (
    <div>
      <section id="banner-welcome">
        <img src="" alt="" />
        <p>SEJA BEM VINDO</p>
      </section>
      <section id="welcome-message">
        <p>
          feito com carinho para ajudar no desenvolvimento de aprendizado
          infantil
        </p>
      </section>
      <section id="infos-welcome">
        <div>
          <img src="" alt="" />
          <p>fácil de entender</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>simples e direto</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>intuitivo e atrativo</p>
        </div>
      </section>
      <section id="end-message">
        <NavLink id="navlink-tohome" to='home'>clique aqui para ir para a página principal</NavLink>
      </section>
    </div>
  );
};

export default BemVindo;
