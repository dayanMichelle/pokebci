import { useState } from "react";
import { Link } from "react-router-dom";
import { usePokemon } from "../../context/PokemonContext";
import { Logo } from "../logo";
import { IoMenu, IoClose } from "react-icons/io5";
import styles from "./NavBar.module.css";

type NavBarProps = {
  show: boolean;
  handleShow: () => void;
};

export const NavBar = ({ show, handleShow }: NavBarProps) => {
  const { filter } = usePokemon();
  const [search, setSearch] = useState("");
  const filterFunction = filter.addFilter("name");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    filterFunction((pokemon) => pokemon.name.startsWith(e.target.value));
  };

  return (
    <nav className={styles.navbar}>
      <button className={styles.button} onClick={handleShow}>
        {show ? <IoClose /> : <IoMenu />}
      </button>
      <div className={styles.containerSearch}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
        <Link to="/">
          <Logo width="30px" />
        </Link>
      </div>
    </nav>
  );
};
