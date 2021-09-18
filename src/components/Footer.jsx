import "./Footer.css";
import tag1 from "../assets/tag1.png";
import tag2 from "../assets/tag2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="address">
        NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os direitos
        reservados. Rua Santa Ifigênia, 556 560/562/564 - Santa Efigênia - CEP:
        01.207-000 - São Paulo / SP - CNPJ 07.282.516/0001-15
      </div>
      <img className="tag1" src={tag1} alt="Econverse logo" />
      <img className="tag2" src={tag2} alt="Vtex logo" />
    </footer>
  );
};

export default Footer;
