import classnames from "classnames";
import { usePokemon } from "../../context/PokemonContext";
import { ListCategories } from "../listCategories";
import styles from "./SideBar.module.css";

type SideBarProps = {
  show: boolean;
};
export const SideBar = ({ show }: SideBarProps) => {
  const { abilities, moves } = usePokemon();

  const asideClasses = classnames(styles.sidebar, {
    [styles.open]: show,
  });

  return (
    <aside className={asideClasses}>
      <ListCategories
        listTypes={abilities}
        title="Abilities"
        category="abilities"
      />
      <ListCategories listTypes={moves} title="Moves" category="moves" />
    </aside>
  );
};
