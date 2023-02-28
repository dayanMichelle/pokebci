import { ListAvatar } from "../listAvatar";
import type { Evolution } from "../../types";
import styles from "./ContainerImages.module.css";

type ContainerImagesProps = {
  location: string;
  img: string;
  evolutions: Evolution[];
  name: string;
};

export const ContainerImages = ({
  location,
  img,
  evolutions,
  name,
}: ContainerImagesProps) => {
  return (
    <div className={styles.flex}>
      <img
        alt={`imagen del pokemon ${name}`}
        className={styles.img}
        src={img}
      />
      <ListAvatar evolutions={evolutions} />
      <span className={styles.location}>
        location: <i>{location}</i>
      </span>
    </div>
  );
};
