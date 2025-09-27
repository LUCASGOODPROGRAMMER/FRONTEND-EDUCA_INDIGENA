import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav id="navbar">
      <div id="logo-navbar">
        <img src="" alt="" />
        <Link to="/home">
          <h2>educa-indigena</h2>
        </Link>
      </div>

      <button className="btn" id="btn-login" onClick={() => navigate("./login")}>
        <img
          className="icone-de-imagem"
          src="https://i.pinimg.com/736x/9a/68/fb/9a68fbc503c51b94e88efe514d79e589.jpg"
          alt=""
        />
        <p>login</p>
      </button>
    </nav>
  );
};

export default NavBar;
