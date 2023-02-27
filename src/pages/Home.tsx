import { ListPokemon } from "../components/listPokemon";
import { Loading } from "../components/loading";
import { LoadMore } from "../components/loadMore";
import { usePokemon } from "../context/PokemonContext";
import styles from "./Home.module.css";

export const Home = () => {
  const { pokemons, getPokemons, error, isLoading } = usePokemon();

  return (
    <>
      <section className={styles.main}>
        <ListPokemon pokemons={pokemons} />
        <LoadMore getPokemons={getPokemons} />
      </section>
      {isLoading && <Loading />}
      {error && <div>error</div>}
    </>
  );
};
