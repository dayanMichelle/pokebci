import styles from "./Avatar.module.css";

type AvatarProps = {
  icon: string;
  name: string;
};

export const Avatar = ({
  icon = "/icons/pokeball.png",
  name = "pokeball",
}: AvatarProps) => {
  return <img className={styles.avatar} src={icon} alt={`Icono de ${name}`} />;
};
