import { Card } from "../card";
import type { PokemonContract } from "../../types";
import styles from "./ListPokemon.module.css";

type ListPokemonProps = {
  pokemons: PokemonContract[];
};

export const ListPokemon = ({ pokemons }: ListPokemonProps) => {
  return (
    <div className={styles.container}>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
