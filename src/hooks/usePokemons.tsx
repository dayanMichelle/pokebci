import { useCallback, useEffect, useState } from "react";
import { getNormalizedPokemons, Params } from "../services/pokemons";
import { PokemonContract } from "../types";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonContract[]>(
    JSON.parse(localStorage.getItem("pokemons") || "[]")
  );
  const [params, setParams] = useState<Params>(
    JSON.parse(
      localStorage.getItem("params") || JSON.stringify({ limit: 20, offset: 0 })
    )
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getPokemons = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const [pokemonsNormalized, newParams] = await getNormalizedPokemons(
        params
      );
      setPokemons([...pokemons, ...pokemonsNormalized]);
      setParams(newParams);

      setIsLoading(false);
      setError("");
    } catch (error) {
      setIsLoading(false);
      setError("Error al obtener los pokemons");
    }
  }, [params]);

  useEffect(() => {
    if (!pokemons?.length) getPokemons();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;

      getPokemons();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pokemons]);

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  useEffect(() => {
    localStorage.setItem("params", JSON.stringify(params));
  }, [params]);

  return {
    pokemons,
    isLoading,
    error,
    getPokemons,
  };
};
