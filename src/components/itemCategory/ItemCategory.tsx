import { Link } from "react-router-dom";
import styles from "./ItemCategory.module.css";

type ItemCategoryProps = {
  type: string;
  category: "abilities" | "moves";
};

export const ItemCategory = ({ category, type }: ItemCategoryProps) => {
  return (
    <li className={styles.li}>
      <Link className={styles.category} to={`/${category}/${type}`}>
        {type}
      </Link>
    </li>
  );
};
