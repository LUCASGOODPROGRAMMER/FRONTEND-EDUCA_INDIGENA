import { useState } from "react";
import { Link } from "react-router-dom";

import BannerLogin from '../../assets/images/banner_login.png'

import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // para impedir o reload da page
    // alguma api de validação vai ser chamada aqui

    // pode deletar:

    // clean
    const chaves = Object.keys(user);
    const cleanUser = {};
    chaves.forEach((chave) => (cleanUser[chave] = ""));
    setUser(cleanUser);
  };

  return (
    <div className="container-form-login">
      <img src={BannerLogin} alt="LOGO" />
      <form onSubmit={handleSubmit} className="form form-login">
        <input className="input-group-form input-welcome" type="text" value="seja bem vindo"/>
        <input
          className="input-group-form"
          type="text"
          placeholder="nome"
          name="name"
          value={user.name || ""}
          onChange={handleChange}
          required
        />
        <input
          className="input-group-form"
          type="text"
          placeholder="email"
          name="email"
          value={user.email || ""}
          onChange={handleChange}
          required
        />
        <input
          className="input-group-form"
          type="password"
          placeholder="senha"
          name="password"
          value={user.password || ""}
          onChange={handleChange}
          required
        />
        <button className="btn btn-submit" type="submit">
          logar
        </button>
        
        <Link to="/cadastro"><span className="span-option">não tem uma conta? cadastre-se</span></Link>
      </form>
    </div>
  );
};

export default Login;
