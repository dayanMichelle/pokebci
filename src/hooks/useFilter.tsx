import { useMemo, useState } from "react";
import { Filter } from "../types";
import { useDebounce } from "./useDebounce";

interface FilterProperties<T> extends Record<string, Filter<T>> {
  [key: string]: Filter<T>;
}

export function useFilter<T>(
  element: T[],
  delay: number = 0
): [
  T[],
  (type: string) => (predicate: Filter<T>) => void,
  (type: string) => void
] {
  const [filters, setFilters] = useState<FilterProperties<T>>({});
  const debouncedValue = useDebounce<FilterProperties<T>>(filters, delay);

  const addFilter = (type: string) => (predicate: Filter<T>) =>
    setFilters({ ...filters, [type]: predicate });

  const cleanFilter = (type: string) => {
    const { [type]: _, ...rest } = filters;
    setFilters(rest);
  };

  const elementsFiltered = useMemo(() => {
    const applyFilters = Object.values(filters).filter(Boolean);
    let elementsFiltered = element;
    for (let predicate of applyFilters) {
      elementsFiltered = elementsFiltered.filter(predicate!);
    }
    return elementsFiltered;
  }, [element, debouncedValue]);

  return [elementsFiltered, addFilter, cleanFilter];
}
