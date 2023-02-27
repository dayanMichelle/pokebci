import { useState } from "react";
import { ItemCategory } from "../itemCategory";
import styles from "./ListCategories.module.css";

type ListCategoriesProps = {
  listTypes: string[];
  title: string;
  category: "abilities" | "moves";
};

export const ListCategories = ({
  listTypes,
  title,
  category,
}: ListCategoriesProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <h3 className={styles.titleCategories} onClick={() => setShow(!show)}>
        {title}: <sup>{listTypes.length}</sup>
      </h3>

      {show && (
        <ul className={styles.listCategories}>
          {listTypes.map((type) => {
            return (
              <ItemCategory key={type} category={category} type={type} />
            );
          })}
        </ul>
      )}
    </div>
  );
};
