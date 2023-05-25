import Logo from "../../assets/Logo.svg";
import "./styles.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <img src={Logo} className="imgLogo" alt="Logo do Pokedex" />
      <section className="buttons">
        <Link to="/">
          <button className="button">Home</button>
        </Link>
        <Link to="/Pokedex">
          <button className="button">Pokédex</button>
        </Link>
        <button className="button">Legendaries</button>
        <Link to="https://pokeapi.co/">
          <button className="button">Documentation</button>
        </Link>
      </section>
    </header>
  );
};
