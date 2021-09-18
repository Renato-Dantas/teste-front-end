import "./Nav.css";
import seta from "../assets/seta.svg";

const Nav = () => {
  return (
    <nav className="nav-section">
      <div className="menu1 font-nav">TODAS AS CATEGORIAS</div>
      <img className="menu-ico ico1" src={seta} alt="arrow" />
      <div className="menu2 font-nav">SOM PROFISSIONAL</div>
      <img className="menu-ico ico2" src={seta} alt="arrow" />
      <div className="menu3 font-nav">INSTRUMENTOS MUSICAIS</div>
      <div className="menu4 font-nav">PROMOÇÕES</div>
      <div className="menu5 font-nav">CONTATO</div>
    </nav>
  );
};

export default Nav;
