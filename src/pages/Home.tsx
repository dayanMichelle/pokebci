import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListPokemon } from "../components/listPokemon";
import { Loading } from "../components/loading";
import { LoadMore } from "../components/loadMore";
import { usePokemon } from "../context/PokemonContext";
import styles from "./Home.module.css";

export const Home = () => {
  const { pokemons, filter, getPokemons, error, isLoading } = usePokemon();
  const { category, option } = useParams();

  useEffect(() => {
    if (
      !category ||
      !option ||
      (category !== "abilities" && category !== "moves")
    )
      return filter.clearFilter("filterCategory");

    const filterFunction = filter.addFilter("filterCategory");
    filterFunction((pokemon) => pokemon[category].includes(option));
  }, [category, option]);

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
