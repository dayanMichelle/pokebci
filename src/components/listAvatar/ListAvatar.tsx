import { Avatar } from "../avatar";
import type { Evolution } from "../../types";
import styles from "./ListAvatar.module.css";

type ListAvatarProps = {
  evolutions: Evolution[];
};

export const ListAvatar = ({ evolutions }: ListAvatarProps) => {
  return (
    <div className={styles.container}>
      {evolutions?.map(({ id, icon, name }) => (
        <Avatar key={id} name={name} icon={icon} />
      ))}
    </div>
  );
};
