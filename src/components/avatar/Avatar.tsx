import styles from "./Avatar.module.css";

type AvatarProps = {
  icon: string;
};

export const Avatar = ({ icon = "/icons/pokeball.png" }: AvatarProps) => {
  return (
    <img className={styles.avatar} src={icon} alt="Icono de la evolucion" />
  );
};
