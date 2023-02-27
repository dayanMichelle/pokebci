import styles from "./InfoPokemon.module.css";

type InfoPokemonProps = {
  id: number;
  name: string;
};

export const InfoPokemon = ({ id, name }: InfoPokemonProps) => {
  return (
    <div className={styles.containerInfo}>
      <p>#{id}</p>
      <p className={styles.name}>{name}</p>
    </div>
  );
};
