import { Link } from "react-router-dom";
import "./Footer.css";

import Perfil from "../../assets/icons/perfil.jpg"
import Perfil2 from "../../assets/icons/perfil2.jpg"
import FacebookIcon from "../../assets/icons/facebook.ico"
import InstagramIcon from "../../assets/icons/instagram.ico"
import LinkedinIcon from "../../assets/icons/linkedin.ico"
import TwitterIcon from "../../assets/icons/twitter.ico"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-devs">
        <h2>
          &copy; Website made by TrashCoders - 2025 / Todos os direitos
          reservados
        </h2>
        <h3>Tech Leade</h3>
        <ul className="devs-list">
          <li className="dev-item">
            <img src={Perfil} alt="Lucas Hubner" />
            <Link to="#">Lucas Hubner</Link>
          </li>
        </ul>
        <h3>My Team</h3>
        <ul className="devs-list">
          <li className="dev-item">
            <img src={Perfil2} alt="Keynner Davi" />
            <Link to="#">Gabriel Ferreira</Link>
          </li>
        </ul>
      </div>

      <div className="footer-info">
        <div className="info-card">
          <h2>Links Importantes</h2>
          <Link to="">Home</Link>
          <Link to="#">Sobre</Link>
          <Link to="#">Serviços</Link>
          <Link to="#">Suporte</Link>
        </div>
        <div className="info-card">
          <h2>Políticas</h2>
          <Link to="#">Privacidade</Link>
          <Link to="#">Termos de Uso</Link>
        </div>
        <div className="info-card">
          <h2>Redes Sociais</h2>
          <Link to="#">
            <img src={FacebookIcon} alt="Facebook" />
            <span>Facebook</span>
          </Link>
          <Link to="#">
            <img src={InstagramIcon} alt="Instagram" />
            <span>Instagram</span>
          </Link>
          <Link to="#">
            <img src={TwitterIcon} alt="Twitter" />
            <span>Twitter</span>
          </Link>
          <Link to="#">
            <img src={LinkedinIcon} alt="Linkedin" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
