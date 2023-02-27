import { InfoPokemon } from "../infoPokemon";
import { CardSkills } from "../cardSkills";
import { ContainerImages } from "../containerImages";
import type { PokemonContract } from "../../types";
import styles from "./Card.module.css";

type CardProps = {
  pokemon: PokemonContract;
};

export const Card = ({ pokemon }: CardProps) => {
  return (
    <div  data-theme=''  className={`${styles.container} ${pokemon?.type}`}>
      <span className={styles.banner}>{pokemon?.type}</span>
      <InfoPokemon name={pokemon?.name} id={pokemon?.id} />
      <ContainerImages
        name={pokemon?.name}
        location={pokemon?.location}
        img={pokemon?.img}
        evolutions={pokemon?.evolutions}
      />
      <CardSkills
        abilities={pokemon?.abilities.slice(0, 4)}
        moves={pokemon?.moves.slice(0, 4)}
        name={pokemon?.name}
      />
    </div>
  );
};
