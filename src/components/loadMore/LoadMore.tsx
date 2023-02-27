import styles from "./LoadMore.module.css";

type LoadMoreProps = {
  getPokemons: () => void;
};

export const LoadMore = ({ getPokemons }: LoadMoreProps) => {
  return (
    <button className={styles.getmore} onClick={getPokemons}>
      Load More Pokemons...
    </button>
  );
};
